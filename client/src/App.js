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
      fetchingInProgress: true,
      error: null,
      results: [],
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
      this.setState({fetchingInProgress: false, error: null, results: results.Itineraries});
    })
    .catch((error) => {
      console.error(error);
      const networkErrorMessage = 'A network error is encountered. Please try again.';
      this.setState({fetchingInProgress: false, error: networkErrorMessage, results: []});
    });
  }

  render() {
    return (
      <div className="App">
        <TopNav/>
        <Header fromPlace={fromPlace} toPlace={toPlace} adults={adults} cabinClass={cabinClass}/>
        <Controls/>
        <Results fetchingInProgress={this.state.fetchingInProgress}
          error={this.state.error}
          results={this.state.results}/>
      </div>
    );
  }
}

export default App;
