import React, { Component } from 'react';
import './App.scss';

import TopNav from './components/topnav';
import Header from './components/header';
import Controls from './components/controls';
import Results from './components/results';

import dateTimeHelper from './date-time-helper.js';
import resultsFetcher from './results-fetcher.js';

const fromPlace = 'EDI', toPlace = 'LON', adults = 2, cabinClass = 'Economy',
  fromDate = dateTimeHelper.nextMonday(), toDate = dateTimeHelper.folowingDay(fromDate);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      fetchingInProgress: true,
    };
  }

  componentDidMount() {
    resultsFetcher.fetch({
      fromPlace, toPlace, adults, 'class': cabinClass,
      'fromDate': dateTimeHelper.toISODateString(fromDate),
      'toDate': dateTimeHelper.toISODateString(toDate),
    })
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      console.debug('results:', results);
      this.setState({results: results.Itineraries, fetchingInProgress: false});
    })
    .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <TopNav/>
        <Header fromPlace={fromPlace} toPlace={toPlace} adults={adults} cabinClass={cabinClass}/>
        <Controls/>
        <Results results={this.state.results} fetchingInProgress={this.state.fetchingInProgress}/>
      </div>
    );
  }
}

export default App;
