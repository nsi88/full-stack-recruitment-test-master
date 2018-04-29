require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const app = express();
const api = require('./api/');
const config = require('./config');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Full-Stack Recruitment test');
});

/**
  Simple flight search api wrapper.

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', api.search.request.validators, api.search.request.validate, (req, res) => {
  api.livePricing.search({
    adults: req.query.adults,
    class: req.query.class,
    toPlace: req.query.toPlace,
    toDate: req.query.toDate,
    fromPlace: req.query.fromPlace,
    fromDate: req.query.fromDate
  })
  .then((results) => {
    res.json(api.search.response.format(results));
  })
  .catch((errors) => {
    console.error(errors);
    res.status(400).json({errors: errors});
  });
});

const server = app.listen(config.port, () => {
  console.log(`Node server listening on http://localhost:${config.port}`);
});

module.exports = server;
