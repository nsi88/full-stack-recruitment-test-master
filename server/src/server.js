require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const { check, validationResult } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');
const app = express();
const api = require('./api/');
const clientApi = require('./client_api');

const validCabinClasses = ['economy', 'premiumeconomy', 'business', 'first'];

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
app.get('/api/search', [
  check('adults').isInt({gt: 0}).withMessage('must be a positive number'),
  sanitize('class').customSanitizer((value) => value ? value.toLowerCase() : value),
  check('class').isIn(validCabinClasses).withMessage(`must be one of ${validCabinClasses.join(', ')}`),
  check('toPlace').exists().withMessage('is required'),
  check('toDate').isISO8601().withMessage('must be a date (YYYY-mm-dd)'),
  check('fromPlace').exists().withMessage('is required'),
  check('fromDate').isISO8601().withMessage('must be a date (YYYY-mm-dd)'),
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

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
