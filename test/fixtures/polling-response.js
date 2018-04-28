module.exports = {
    "Agents": [
      {
          "BookingNumber": "+448717002000",
          "Id": 2499522,
          "ImageUrl": "http://s1.apideeplink.com/images/websites/flyb.png",
          "Name": "flybe",
          "OptimisedForMobile": false,
          "Status": "UpdatesComplete",
          "Type": "Airline"
      },
      {
          "Id": 2628363,
          "ImageUrl": "http://s1.apideeplink.com/images/websites/gtuk.png",
          "Name": "GotoGate",
          "OptimisedForMobile": true,
          "Status": "UpdatesComplete",
          "Type": "TravelAgent"
      }
    ],
    "Carriers": [
      {
          "Code": "BE",
          "DisplayCode": "BE",
          "Id": 885,
          "ImageUrl": "http://s1.apideeplink.com/images/airlines/BE.png",
          "Name": "Flybe"
      }
    ],
    "Currencies": [
        {
            "Code": "GBP",
            "DecimalDigits": 2,
            "DecimalSeparator": ".",
            "RoundingCoefficient": 0,
            "SpaceBetweenAmountAndSymbol": false,
            "Symbol": "\u00a3",
            "SymbolOnLeft": true,
            "ThousandsSeparator": ","
        },
        {
            "Code": "EUR",
            "DecimalDigits": 2,
            "DecimalSeparator": ",",
            "RoundingCoefficient": 0,
            "SpaceBetweenAmountAndSymbol": true,
            "Symbol": "\u20ac",
            "SymbolOnLeft": false,
            "ThousandsSeparator": "."
        },
        {
            "Code": "CHF",
            "DecimalDigits": 2,
            "DecimalSeparator": ".",
            "RoundingCoefficient": 0,
            "SpaceBetweenAmountAndSymbol": true,
            "Symbol": "CHF",
            "SymbolOnLeft": true,
            "ThousandsSeparator": "'"
        }
    ],
    "Itineraries": [
        {
            "BookingDetailsLink": {
                "Body": "OutboundLegId=11235-1804301820--32302-0-13554-1804302000&InboundLegId=13554-1805011820--32302-0-11235-1805012000",
                "Method": "PUT",
                "Uri": "/apiservices/pricing/v1.0/be5231670ec7473b894076fa43e2fe3e_rrsqbjcb_898fb6ea89a3b8cacf2a4879cbedc5e8/booking"
            },
            "InboundLegId": "13554-1805011820--32302-0-11235-1805012000",
            "OutboundLegId": "11235-1804301820--32302-0-13554-1804302000",
            "PricingOptions": [
                {
                    "Agents": [
                        2499522
                    ],
                    "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fUK%2fen-gb%2fGBP%2fflyb%2f2%2f11235.13554.2018-04-30%2c13554.11235.2018-05-01%2fair%2fairli%2fflights%3fitinerary%3dflight%7c-32302%7c2109%7c11235%7c2018-04-30T18%3a20%7c13554%7c2018-04-30T20%3a00%7c100%2cflight%7c-32302%7c2108%7c13554%7c2018-05-01T18%3a20%7c11235%7c2018-05-01T20%3a00%7c100%26carriers%3d-32302%26operators%3d-32302%2c-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d100.00%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3d8c5eed54-7d0f-45e4-a6b1-32c3fdfd7075%26commercial_filters%3dfalse%26q_datetime_utc%3d2018-04-23T01%3a47%3a25",
                    "Price": 100,
                    "QuoteAgeInMinutes": 434
                },
                {
                    "Agents": [
                        2628363
                    ],
                    "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fUK%2fen-gb%2fGBP%2fgtuk%2f2%2f11235.13554.2018-04-30%2c13554.11235.2018-05-01%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32302%7c2109%7c11235%7c2018-04-30T18%3a20%7c13554%7c2018-04-30T20%3a00%7c100%2cflight%7c-32302%7c2108%7c13554%7c2018-05-01T18%3a20%7c11235%7c2018-05-01T20%3a00%7c100%26carriers%3d-32302%26operators%3d-32302%2c-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d111.77%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3d8c5eed54-7d0f-45e4-a6b1-32c3fdfd7075%26deeplink_ids%3deu-central-1.prod_1a362be17fc28dc580ec6dfbd29e3d9e%26commercial_filters%3dfalse%26q_datetime_utc%3d2018-04-23T08%3a51%3a16",
                    "Price": 111.77,
                    "QuoteAgeInMinutes": 10
                }
            ]
        },
        {
            "BookingDetailsLink": {
                "Body": "OutboundLegId=11235-1804301820--32302-0-13554-1804302000&InboundLegId=13554-1805012045--32302-0-11235-1805012225",
                "Method": "PUT",
                "Uri": "/apiservices/pricing/v1.0/be5231670ec7473b894076fa43e2fe3e_rrsqbjcb_898fb6ea89a3b8cacf2a4879cbedc5e8/booking"
            },
            "InboundLegId": "13554-1805012045--32302-0-11235-1805012225",
            "OutboundLegId": "11235-1804301820--32302-0-13554-1804302000",
            "PricingOptions": [
                {
                    "Agents": [
                        2499522
                    ],
                    "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fUK%2fen-gb%2fGBP%2fflyb%2f2%2f11235.13554.2018-04-30%2c13554.11235.2018-05-01%2fair%2fairli%2fflights%3fitinerary%3dflight%7c-32302%7c2109%7c11235%7c2018-04-30T18%3a20%7c13554%7c2018-04-30T20%3a00%7c100%2cflight%7c-32302%7c2110%7c13554%7c2018-05-01T20%3a45%7c11235%7c2018-05-01T22%3a25%7c100%26carriers%3d-32302%26operators%3d-32302%2c-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d100.00%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3d8c5eed54-7d0f-45e4-a6b1-32c3fdfd7075%26commercial_filters%3dfalse%26q_datetime_utc%3d2018-04-23T01%3a47%3a25",
                    "Price": 100,
                    "QuoteAgeInMinutes": 434
                },
                {
                    "Agents": [
                        2628363
                    ],
                    "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fUK%2fen-gb%2fGBP%2fgtuk%2f2%2f11235.13554.2018-04-30%2c13554.11235.2018-05-01%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32302%7c2109%7c11235%7c2018-04-30T18%3a20%7c13554%7c2018-04-30T20%3a00%7c100%2cflight%7c-32302%7c2110%7c13554%7c2018-05-01T20%3a45%7c11235%7c2018-05-01T22%3a25%7c100%26carriers%3d-32302%26operators%3d-32302%2c-32302%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d111.77%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3d8c5eed54-7d0f-45e4-a6b1-32c3fdfd7075%26deeplink_ids%3deu-central-1.prod_012ad5606be5512420766bdf1b78b393%26commercial_filters%3dfalse%26q_datetime_utc%3d2018-04-23T08%3a51%3a16",
                    "Price": 111.77,
                    "QuoteAgeInMinutes": 10
                }
            ]
        }
    ],
    "Legs": [
      {
          "Arrival": "2018-05-01T20:00:00",
          "Carriers": [
              885
          ],
          "Departure": "2018-05-01T18:20:00",
          "DestinationStation": 11235,
          "Directionality": "Inbound",
          "Duration": 100,
          "FlightNumbers": [
              {
                  "CarrierId": 885,
                  "FlightNumber": "2108"
              }
          ],
          "Id": "13554-1805011820--32302-0-11235-1805012000",
          "JourneyMode": "Flight",
          "OperatingCarriers": [
              885
          ],
          "OriginStation": 13554,
          "SegmentIds": [
              60
          ],
          "Stops": []
      },
      {
          "Arrival": "2018-04-30T20:00:00",
          "Carriers": [
              885
          ],
          "Departure": "2018-04-30T18:20:00",
          "DestinationStation": 13554,
          "Directionality": "Outbound",
          "Duration": 100,
          "FlightNumbers": [
              {
                  "CarrierId": 885,
                  "FlightNumber": "2109"
              }
          ],
          "Id": "11235-1804301820--32302-0-13554-1804302000",
          "JourneyMode": "Flight",
          "OperatingCarriers": [
              885
          ],
          "OriginStation": 11235,
          "SegmentIds": [
              74
          ],
          "Stops": []
      },
      {
          "Arrival": "2018-05-01T22:25:00",
          "Carriers": [
              885
          ],
          "Departure": "2018-05-01T20:45:00",
          "DestinationStation": 11235,
          "Directionality": "Inbound",
          "Duration": 100,
          "FlightNumbers": [
              {
                  "CarrierId": 885,
                  "FlightNumber": "2110"
              }
          ],
          "Id": "13554-1805012045--32302-0-11235-1805012225",
          "JourneyMode": "Flight",
          "OperatingCarriers": [
              885
          ],
          "OriginStation": 13554,
          "SegmentIds": [
              62
          ],
          "Stops": []
      },
      {
          "Arrival": "2018-04-30T20:00:00",
          "Carriers": [
              885
          ],
          "Departure": "2018-04-30T18:20:00",
          "DestinationStation": 13554,
          "Directionality": "Outbound",
          "Duration": 100,
          "FlightNumbers": [
              {
                  "CarrierId": 885,
                  "FlightNumber": "2109"
              }
          ],
          "Id": "11235-1804301820--32302-0-13554-1804302000",
          "JourneyMode": "Flight",
          "OperatingCarriers": [
              885
          ],
          "OriginStation": 11235,
          "SegmentIds": [
              74
          ],
          "Stops": []
      }
    ],
    "Places": [
        {
            "Code": "EDI",
            "Id": 11235,
            "Name": "Edinburgh",
            "ParentId": 2343,
            "Type": "Airport"
        },
        {
            "Code": "LHR",
            "Id": 13554,
            "Name": "London Heathrow",
            "ParentId": 4698,
            "Type": "Airport"
        },
        {
            "Code": "DUB",
            "Id": 11154,
            "Name": "Dublin",
            "ParentId": 2277,
            "Type": "Airport"
        },
        {
            "Code": "ORK",
            "Id": 15069,
            "Name": "Cork",
            "ParentId": 1788,
            "Type": "Airport"
        },
        {
            "Code": "ZRH",
            "Id": 18563,
            "Name": "Zurich",
            "ParentId": 9168,
            "Type": "Airport"
        },
        {
            "Code": "GVA",
            "Id": 12015,
            "Name": "Geneva",
            "ParentId": 2835,
            "Type": "Airport"
        },
        {
            "Code": "AMS",
            "Id": 9451,
            "Name": "Amsterdam",
            "ParentId": 509,
            "Type": "Airport"
        },
        {
            "Code": "BHD",
            "Id": 9889,
            "Name": "Belfast City",
            "ParentId": 876,
            "Type": "Airport"
        },
        {
            "Code": "BRU",
            "Id": 10141,
            "Name": "Brussels International",
            "ParentId": 1178,
            "Type": "Airport"
        },
        {
            "Code": "CDG",
            "Id": 10413,
            "Name": "Paris Charles de Gaulle",
            "ParentId": 6073,
            "Type": "Airport"
        },
        {
            "Code": "MAN",
            "Id": 13880,
            "Name": "Manchester",
            "ParentId": 4872,
            "Type": "Airport"
        },
        {
            "Code": "EDI",
            "Id": 2343,
            "Name": "Edinburgh",
            "ParentId": 247,
            "Type": "City"
        },
        {
            "Code": "LON",
            "Id": 4698,
            "Name": "London",
            "ParentId": 247,
            "Type": "City"
        },
        {
            "Code": "DUB",
            "Id": 2277,
            "Name": "Dublin",
            "ParentId": 234,
            "Type": "City"
        },
        {
            "Code": "ORK",
            "Id": 1788,
            "Name": "Cork",
            "ParentId": 234,
            "Type": "City"
        },
        {
            "Code": "ZRH",
            "Id": 9168,
            "Name": "Zurich",
            "ParentId": 242,
            "Type": "City"
        },
        {
            "Code": "GVA",
            "Id": 2835,
            "Name": "Geneva",
            "ParentId": 242,
            "Type": "City"
        },
        {
            "Code": "AMS",
            "Id": 509,
            "Name": "Amsterdam",
            "ParentId": 235,
            "Type": "City"
        },
        {
            "Code": "BFS",
            "Id": 876,
            "Name": "Belfast",
            "ParentId": 247,
            "Type": "City"
        },
        {
            "Code": "BRU",
            "Id": 1178,
            "Name": "Brussels",
            "ParentId": 240,
            "Type": "City"
        },
        {
            "Code": "PAR",
            "Id": 6073,
            "Name": "Paris",
            "ParentId": 244,
            "Type": "City"
        },
        {
            "Code": "MAN",
            "Id": 4872,
            "Name": "Manchester",
            "ParentId": 247,
            "Type": "City"
        },
        {
            "Code": "GB",
            "Id": 247,
            "Name": "United Kingdom",
            "Type": "Country"
        },
        {
            "Code": "IE",
            "Id": 234,
            "Name": "Ireland",
            "Type": "Country"
        },
        {
            "Code": "CH",
            "Id": 242,
            "Name": "Switzerland",
            "Type": "Country"
        },
        {
            "Code": "NL",
            "Id": 235,
            "Name": "Netherlands",
            "Type": "Country"
        },
        {
            "Code": "BE",
            "Id": 240,
            "Name": "Belgium",
            "Type": "Country"
        },
        {
            "Code": "FR",
            "Id": 244,
            "Name": "France",
            "Type": "Country"
        }
    ],
    "Query": {
        "Adults": 1,
        "CabinClass": "Economy",
        "Children": 0,
        "Country": "GB",
        "Currency": "GBP",
        "DestinationPlace": "13554",
        "GroupPricing": false,
        "InboundDate": "2018-05-01",
        "Infants": 0,
        "Locale": "en-gb",
        "LocationSchema": "Default",
        "OriginPlace": "11235",
        "OutboundDate": "2018-04-30"
    },
    "Segments": [
      {
          "ArrivalDateTime": "2018-05-01T20:00:00",
          "Carrier": 885,
          "DepartureDateTime": "2018-05-01T18:20:00",
          "DestinationStation": 11235,
          "Directionality": "Outbound",
          "Duration": 100,
          "FlightNumber": "2108",
          "Id": 60,
          "JourneyMode": "Flight",
          "OperatingCarrier": 885,
          "OriginStation": 13554
      },
      {
          "ArrivalDateTime": "2018-04-30T20:00:00",
          "Carrier": 885,
          "DepartureDateTime": "2018-04-30T18:20:00",
          "DestinationStation": 13554,
          "Directionality": "Outbound",
          "Duration": 100,
          "FlightNumber": "2109",
          "Id": 74,
          "JourneyMode": "Flight",
          "OperatingCarrier": 885,
          "OriginStation": 11235
      },
      {
          "ArrivalDateTime": "2018-05-01T22:25:00",
          "Carrier": 885,
          "DepartureDateTime": "2018-05-01T20:45:00",
          "DestinationStation": 11235,
          "Directionality": "Outbound",
          "Duration": 100,
          "FlightNumber": "2110",
          "Id": 62,
          "JourneyMode": "Flight",
          "OperatingCarrier": 885,
          "OriginStation": 13554
      }
    ],
    "ServiceQuery": {
        "DateTime": "2018-04-23T09:01:28.1734304Z"
    },
    "SessionKey": "TestSessionKey",
    "Status": "UpdatesComplete"
};
