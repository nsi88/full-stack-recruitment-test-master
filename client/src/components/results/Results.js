import React from 'react';
import './Results.scss';
// TODO: use one arrow icon passing a color as a prop.
import longArrowRightGray from '../../icons/long-arrow-right-gray.svg';
import dateTimeHelper from '../../date-time-helper.js';

const Results = ({results}) => (
  <ul className='results'>
    {results.map((result) => (<Result result={result}/>))}
  </ul>
);

const Result = ({result}) => (
  <li className='result'>
    <div className='legs'>
      {result.Legs.map((leg) => (<Leg leg={leg}/>))}
    </div>
    <div className='bottom'>
      <div className='priceInfo'>
        <div className='price'>
          {result.Currency.Symbol}&nbsp;{result.Price}
        </div>
        <div className='agent'>{result.Agent.Name}</div>
      </div>
      <button className='select'>Select</button>
    </div>
  </li>
);

const Leg = ({leg}) => (
  <div className='leg'>
    <div className='mainInfo'>
      <img className='airline' alt={leg.Carrier.Name} src={carrierLogo(leg.Carrier.Code)}/>
      <div className='departure'>
        <div className='time'>{dateTimeHelper.formatTime(dateTimeHelper.parse(leg.Departure))}</div>
        <div className='place'>{leg.OriginStation.Code}</div>
      </div>
      <div className='arrowContainer'>
        <img className='arrow' alt='to' src={longArrowRightGray}/>
      </div>
      <div className='arrival'>
        <div className='time'>{dateTimeHelper.formatTime(dateTimeHelper.parse(leg.Arrival))}</div>
        <div className='place'>{leg.DestinationStation.Code}</div>
      </div>
    </div>
    <div className='additionalInfo'>
      <div className='duration'>{dateTimeHelper.formatDuration(leg.Duration)}</div>
      <div className={leg.StopsCount === 0 ? 'stops direct' : 'stops withStops'}>{stopsDescription(leg.StopsCount)}</div>
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

function carrierLogo(carrierCode) {
  return `https://logos.skyscnr.com/images/airlines/favicon/${carrierCode}.png`;
}

export default Results;
