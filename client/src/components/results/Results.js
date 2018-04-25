import React from 'react';
import BpkBannerAlert, { ALERT_TYPES } from 'bpk-component-banner-alert';
import './Results.scss';
// TODO: use one arrow icon passing a color as a prop.
import longArrowRightGray from '../../icons/long-arrow-right-gray.svg';
import dateTimeHelper from '../../date-time-helper.js';

const Results = ({fetchingInProgress, error, results}) => {
  if (fetchingInProgress) {
    return (
      <div className='spinner'>
        <div className='spinner__icon'/>
        <div className='spinner__text'>Searching</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='error'>
        <BpkBannerAlert message={error} type={ALERT_TYPES.ERROR}/>
      </div>
    );
  }

  return (
    <ul className='results'>
      {results.map((result, index) => (<Result key={`result-${index}`} result={result}/>))}
    </ul>
  );
};

const Result = ({result}) => (
  <li className='result'>
    <div className='result__legs'>
      {result.Legs.map((leg, index) => (<Leg key={`leg-${index}`} leg={leg}/>))}
    </div>
    <div className='result__bottom'>
      <div className='result__price-info'>
        <div className='result__price'>
          {result.Currency.Symbol}&nbsp;{result.Price}
        </div>
        <div className='result__agent'>{result.Agent.Name}</div>
      </div>
      <button className='result__select'>Select</button>
    </div>
  </li>
);

const Leg = ({leg}) => (
  <div className='leg'>
    <div className='leg__main-info'>
      <img className='leg__airline' alt={leg.Carrier.Name} src={carrierLogo(leg.Carrier.Code)}/>
      <div className='leg__departure'>
        <div className='leg__time'>{dateTimeHelper.formatTime(dateTimeHelper.parse(leg.Departure))}</div>
        <div className='leg__place'>{leg.OriginStation.Code}</div>
      </div>
      <div className='leg__arrow-container'>
        <img className='leg__arrow' alt='to' src={longArrowRightGray}/>
      </div>
      <div className='leg__arrival'>
        <div className='leg__time'>{dateTimeHelper.formatTime(dateTimeHelper.parse(leg.Arrival))}</div>
        <div className='leg__place'>{leg.DestinationStation.Code}</div>
      </div>
    </div>
    <div className='leg__additional-info'>
      <div className='leg__duration'>{dateTimeHelper.formatDuration(leg.Duration)}</div>
      <div className={leg.StopsCount === 0 ? 'leg__stops leg--direct' : 'leg__stops leg--with-stops'}>{stopsDescription(leg.StopsCount)}</div>
    </div>
  </div>
);


/**
 * stopsDescription - Text description of stops count.
 *
 * E.g. 0 -> 'Direct', 1 -> '1 stop', 2 -> '2 stops'.
 */
function stopsDescription(stopsCount) {
  switch (stopsCount) {
    case 0:
      return 'Direct';
    case 1:
      return '1 stop';
    default:
      return `${stopsCount} stops`
  }
}

// REVIEW: not sure in here, do I need to take imageUrl or make ut mannually, like now.
function carrierLogo(carrierCode) {
  return `https://logos.skyscnr.com/images/airlines/favicon/${carrierCode}.png`;
}

export default Results;
