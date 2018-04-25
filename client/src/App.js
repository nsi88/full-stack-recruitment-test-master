import React, { Component } from 'react';
import './App.scss';

import TopNav from './components/topnav';
import Header from './components/header';
import Controls from './components/controls';
import Results from './components/results';

import dateTimeHelper from './date-time-helper.js';

const fromPlace = 'EDI-sky', toPlace = 'LOND-sky', adults = 2, cabinClass = 'Economy',
  fromDate = dateTimeHelper.nextMonday(), toDate = dateTimeHelper.folowingDay(fromDate);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  render() {
    return (
      <div className="App">
        <TopNav/>
        <Header fromPlace={fromPlace} toPlace={toPlace} adults={adults} cabinClass={cabinClass}/>
        <Controls/>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

// example api use
// TODO put this call somewhere sensible
console.log('fetching results from server...');

const url = `http://localhost:4000/api/search?fromPlace=${fromPlace}&toPlace=${toPlace}&adults=${adults}&class=${cabinClass}&fromDate=${dateTimeHelper.toISODateString(fromDate)}&toDate=${dateTimeHelper.toISODateString(toDate)}`;
console.log('url:', url);
fetch(url)
.then((response) => {
  return response.json();
})
.then((results) => {
  console.log('TODO: something with these results:');
  console.log(results);
})
.catch(console.error);

export default App;
