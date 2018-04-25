require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const app = express();
const api = require('./api/');
const clientApi = require('./client_api');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', (req, res) => {
  api.livePricing.search({
    // TODO: validate params
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
    res.json(clientApi.response.format({errors}));
  });
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
