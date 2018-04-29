const _ = require('lodash');

const response = {
  /**
   * Format client API response.
   *
   * See an example in test/fixtures/server-response.js
   */
  format: (results) => {
    // NOTE: Optimisation of array lookups.
    // Converts arrays (Agents, Carriers, Legs, Places, Segments) to an object with key Id
    Object.assign(results, {
      AgentsObject: _.groupBy(results.Agents, agent => agent.Id),
      CarriersObject: _.groupBy(results.Carriers, carrier => carrier.Id),
      LegsObject: _.groupBy(results.Legs, leg => leg.Id),
      PlacesObject: _.groupBy(results.Places, place => place.Id),
      SegmentsObject: _.groupBy(results.Segments, segment => segment.Id)
    });
    return {
      'Itineraries': results.Itineraries.map((itinerary) => formatItinerary(itinerary, results)),
    };
  }
};

function formatItinerary(itinerary, results) {
  // REVIEW: It's strange for me. Sometimes PricingOption objects look like:
  // { Agents: [], QuoteAgeInMinutes: 0, Price: 0, DeeplinkUrl: 'http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fUK%2fen-gb%2fGBP%2fflyb%2f2%2f11235.13554.2018-04-30%2c13554.11235.2018-05-01%2fair%2fairli%2fflights%3fitinerary%3dflight%7c-32302%7c2107%7c11235%7c2018-04-30T15%3a50%7c13554%7c2018-04-30T17%3a30%7c100%2cflight%7c-32302%7c2102%7c13554%7c2018-05-01T08%3a45%7c11235%7c2018-05-01T10%3a25%7c100%26carriers%3d-32302%26operators%3d-32302%2c-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d121.00%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3d543b1e10-4c8c-4fcd-82be-985dc6cf4b9e%26commercial_filters%3dfalse%26q_datetime_utc%3d2018-04-23T11%3a13%3a55' }
  // So far I just filter it out.
  const pricingOptions = itinerary.PricingOptions.filter((pricingOption) => !pricingOptionIsEmpty(pricingOption));
  // REVIEW: not sure in here, which PricingOption, Agent, Currency to choose.
  const pricingOption = chooseCheapestPricingOption(pricingOptions);
  const agent = results.AgentsObject[pricingOption.Agents[0]][0];
  const currency = results.Currencies[0];
  const outboundLeg = results.LegsObject[itinerary.OutboundLegId][0];
  const inboundLeg = results.LegsObject[itinerary.InboundLegId][0];
  return {
    'Agent': {
      'Name': agent.Name,
    },
    'Currency': {
      'Symbol': currency.Symbol,
    },
    'Legs': [formatLeg(outboundLeg, results), formatLeg(inboundLeg, results)],
    'Price': pricingOption.Price,
  };
}

function pricingOptionIsEmpty({Agents}) {
  return Agents.length === 0;
}

function chooseCheapestPricingOption(pricingOptions) {
  // REVIEW: suppose that PricingOptions must not be empty.
  console.assert(pricingOptions.length > 0, 'PricingOptions must not be empty')
  return pricingOptions.slice(1).reduce((cheapestPricingOption, currentPricingOption) => {
    if (cheapestPricingOption.Price < currentPricingOption.Price) {
      return cheapestPricingOption;
    } else {
      return currentPricingOption;
    }
  }, pricingOptions[0]);
}

function formatLeg(leg, results) {
  const carrier = results.CarriersObject[leg.Carriers[0]][0];
  const originStation = results.PlacesObject[leg.OriginStation][0];
  const destinationStation = results.PlacesObject[leg.DestinationStation][0];
  return {
    'Carrier': {
      'Code': carrier.Code,
      'Name': carrier.Name,
    },
    'Departure': leg.Departure,
    'Arrival': leg.Arrival,
    'Duration': leg.Duration,
    'OriginStation': {
      'Code': originStation.Code,
    },
    'DestinationStation': {
      'Code': destinationStation.Code,
    },
    'StopsCount': leg.Stops.length,
  };
}

module.exports = response;
