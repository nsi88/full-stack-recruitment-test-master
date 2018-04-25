import React, { Component } from 'react';
import './App.scss';

import TopNav from './components/topnav';
import Header from './components/header';
import Controls from './components/controls';
import Results from './components/results';

import dateTimeHelper from './date-time-helper.js';

const fromPlace = 'EDI', toPlace = 'LON', adults = 2, cabinClass = 'Economy',
  fromDate = dateTimeHelper.nextMonday(), toDate = dateTimeHelper.folowingDay(fromDate);

const results = [{
  "Agent": {
      "Name": "omegaflightstore.com"
  },
  "Currency": {
      "Symbol": "\u00a3"
  },
  "Legs": [
      {
          "Arrival": "2018-04-30T08:30:00",
          "Carrier": {
              "Code": "EZ",
              "Name": "Brussels Airlines"
          },
          "Departure": "2018-04-30T07:00:00",
          "DestinationStation": {
              "Code": "LHR"
          },
          "Duration": 90,
          "OriginStation": {
              "Code": "EDI"
          },
          "StopsCount": 0
      },
      {
          "Arrival": "2018-05-01T16:00:00",
          "Carrier": {
              "Code": "EZ",
              "Name": "British Airways"
          },
          "Departure": "2018-05-01T14:30:00",
          "DestinationStation": {
              "Code": "EDI"
          },
          "Duration": 90,
          "OriginStation": {
              "Code": "LHR"
          },
          "StopsCount": 0
      }
  ],
  "Price": 98
}, {
  "Agent": {
      "Name": "omegaflightstore.com"
  },
  "Currency": {
      "Symbol": "\u00a3"
  },
  "Legs": [
      {
          "Arrival": "2018-04-30T08:30:00",
          "Carrier": {
              "Code": "EZ",
              "Name": "Brussels Airlines"
          },
          "Departure": "2018-04-30T07:00:00",
          "DestinationStation": {
              "Code": "LHR"
          },
          "Duration": 90,
          "OriginStation": {
              "Code": "EDI"
          },
          "StopsCount": 0
      },
      {
          "Arrival": "2018-05-01T16:00:00",
          "Carrier": {
              "Code": "EZ",
              "Name": "British Airways"
          },
          "Departure": "2018-05-01T14:30:00",
          "DestinationStation": {
              "Code": "EDI"
          },
          "Duration": 90,
          "OriginStation": {
              "Code": "LHR"
          },
          "StopsCount": 0
      }
  ],
  "Price": 98
}, {
  "Agent": {
      "Name": "omegaflightstore.com"
  },
  "Currency": {
      "Symbol": "\u00a3"
  },
  "Legs": [
      {
          "Arrival": "2018-04-30T08:30:00",
          "Carrier": {
              "Code": "EZ",
              "Name": "Brussels Airlines"
          },
          "Departure": "2018-04-30T07:00:00",
          "DestinationStation": {
              "Code": "LHR"
          },
          "Duration": 90,
          "OriginStation": {
              "Code": "EDI"
          },
          "StopsCount": 0
      },
      {
          "Arrival": "2018-05-01T16:00:00",
          "Carrier": {
              "Code": "EZ",
              "Name": "British Airways"
          },
          "Departure": "2018-05-01T14:30:00",
          "DestinationStation": {
              "Code": "EDI"
          },
          "Duration": 90,
          "OriginStation": {
              "Code": "LHR"
          },
          "StopsCount": 0
      }
  ],
  "Price": 98
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <Header fromPlace={fromPlace} toPlace={toPlace} adults={adults} cabinClass={cabinClass}/>
        <Controls/>
        <Results results={results}/>
      </div>
    );
  }
}

// example api use
// TODO put this call somewhere sensible
// TODO send parameters to server - check out `server/src/api/server.js`
console.log('fetching results from server...');

fetch('http://localhost:4000/api/search')
.then((response) => {
  return response.json();
})
.then((results) => {
  console.log('TODO: something with these results:');
  console.log(results);
})
.catch(console.error);

export default App;
