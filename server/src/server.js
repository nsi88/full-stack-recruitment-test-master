require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const { query, validationResult } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');
const app = express();
const api = require('./api/');
const clientApi = require('./client_api');

const VALID_CABIN_CLASSES = ['economy', 'premiumeconomy', 'business', 'first'];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// TODO: delete the endpoint or replace the response
app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
// TODO: move it to clientApi.request.searchValidators
app.get('/api/search', [
  query('adults').isInt({gt: 0}).withMessage('must be a positive number'),
  sanitize('class').customSanitizer((value) => value ? value.toLowerCase() : value),
  query('class').isIn(VALID_CABIN_CLASSES).withMessage(`must be one of ${VALID_CABIN_CLASSES.join(', ')}`),
  query('toPlace').exists().withMessage('is required'),
  query('toDate').isISO8601().withMessage('must be a date (YYYY-mm-dd)'),
  query('fromPlace').exists().withMessage('is required'),
  query('fromDate').isISO8601().withMessage('must be a date (YYYY-mm-dd)'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  api.livePricing.search({
    adults: req.query.adults,
    class: req.query.class,
    toPlace: req.query.toPlace,
    toDate: req.query.toDate,
    fromPlace: req.query.fromPlace,
    fromDate: req.query.fromDate
  })
  // TODO: tests
  .then((results) => {
    res.json(clientApi.response.format({results}));
  })
  .catch((errors) => {
    console.error(errors);
    res.status(400).json(clientApi.response.format({errors}));
  });
});

const server = app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});

module.exports = server;
