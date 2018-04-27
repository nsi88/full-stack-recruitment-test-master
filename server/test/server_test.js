const assert = require('assert');
const fs = require('fs');
const { describe, it, before, after } = require('mocha');
const nock = require('nock');
const request = require('supertest');
const server = require('../src/server');

after(function() {
  server.close();
});

describe('/api/search', function(done) {
  describe('with missing params', function() {
    it('should return errors', function(done) {
      request(server)
        .get('/api/search')
        .expect(400)
        .expect(({body}) => {
          body.errors.sort((a, b) => a.param < b.param ? -1 : 1);
          assert.deepEqual(body, {
            errors: [
              { location: 'query', param: 'adults', msg: 'must be a positive number' },
              { location: 'query', param: 'class', msg: 'must be one of economy, premiumeconomy, business, first' },
              { location: 'query', param: 'fromDate', msg: 'must be a date (YYYY-mm-dd)' },
              { location: 'query', param: 'fromPlace', msg: 'is required' },
              { location: 'query', param: 'toDate', msg: 'must be a date (YYYY-mm-dd)' },
              { location: 'query', param: 'toPlace', msg: 'is required' },
            ]
          });
        })
        .end(done);
    });
  });

  describe('with invalid adults', function() {
    it('should return errors', function(done) {
      request(server)
        .get('/api/search?adults=0&class=Economy&fromDate=2018-04-30&fromPlace=EDI&toDate=2018-05-01&toPlace=LON')
        .expect(400)
        .expect(({body}) => {
          assert.deepEqual(body, {
            errors: [
              { location: 'query', param: 'adults', msg: 'must be a positive number', value: '0' }
            ]
          });
        })
        .end(done);
    });
  });

  describe('with valid params', function() {
    before(function(done) {
      const apiUri = 'http://partners.api.skyscanner.net';
      const sessionUrl = apiUri + '/apiservices/pricing/sg1/v1.0/TestSessionKey';
      nock(apiUri)
        .post('/apiservices/pricing/v1.0')
        .query(true)
        .reply(201, {}, { 'Location': sessionUrl });
      nock(apiUri)
        .get('/apiservices/pricing/v1.0/TestSessionKey')
        .query(true)
        .replyWithFile(200, __dirname + '/fixtures/polling-response.json', { 'Content-Type': 'application/json' });
      done();
    });

    it('should return itineraries', function(done) {
      request(server)
        .get('/api/search?adults=1&class=Economy&fromDate=2018-04-30&fromPlace=EDI&toDate=2018-05-01&toPlace=LON')
        .expect(200)
        .expect(({body}) => {
          const response = fs.readFileSync(__dirname + '/fixtures/server-response.json').toString();
          assert.deepEqual(body, JSON.parse(response));
        })
        .end(done);
    });
  });
});
