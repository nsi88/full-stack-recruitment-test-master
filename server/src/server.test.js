const nock = require('nock');
const request = require('supertest');
const server = require('../src/server');

afterAll(() => { server.close() });

describe('/api/search', () => {
  describe('with missing params', () => {
    test('should return errors', (done) => {
      request(server)
        .get('/api/search')
        .expect(400)
        .expect(({body}) => {
          body.errors.sort((a, b) => a.param < b.param ? -1 : 1);
          expect(body).toEqual({
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

  describe('with invalid adults', () => {
    test('should return errors', (done) => {
      request(server)
        .get('/api/search?adults=0&class=Economy&fromDate=2018-04-30&fromPlace=EDI&toDate=2018-05-01&toPlace=LON')
        .expect(400)
        .expect(({body}) => {
          expect(body).toEqual({
            errors: [
              { location: 'query', param: 'adults', msg: 'must be a positive number', value: '0' }
            ]
          });
        })
        .end(done);
    });
  });

  describe('with valid params', () => {
    beforeAll(() => {
      const apiUri = 'http://partners.api.skyscanner.net';
      const sessionUrl = apiUri + '/apiservices/pricing/sg1/v1.0/TestSessionKey';
      // TODO: replace nock with jest mocks
      nock(apiUri)
        .post('/apiservices/pricing/v1.0')
        .query(true)
        .reply(201, {}, { 'Location': sessionUrl });
      const pollingResponse = require('../../test/fixtures/polling-response');
      nock(apiUri)
        .get('/apiservices/pricing/v1.0/TestSessionKey')
        .query(true)
        .reply(200, pollingResponse, { 'Content-Type': 'application/json' });
    });

    test('should return itineraries', (done) => {
      request(server)
        .get('/api/search?adults=1&class=Economy&fromDate=2018-04-30&fromPlace=EDI&toDate=2018-05-01&toPlace=LON')
        .expect(200)
        .expect(({body}) => {
          const response = require('../../test/fixtures/server-response');
          expect(body).toEqual(response);
        })
        .end(done);
    });
  });
});
