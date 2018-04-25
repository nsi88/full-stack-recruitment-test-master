import React from 'react';
import './Controls.scss';
import priceAlerts from '../../icons/price-alerts.svg';

const Controls = () => (
  <div className='controls'>
    <div>
      <span className='controls__control'>Filter</span>
      <span className='controls__control'>Sort</span>
    </div>
    <div>
      <span className='controls__control control'>
        <img className='control__price-alerts' role='presentation' src={priceAlerts}/>
        Price alerts
      </span>
    </div>
  </div>
);

export default Controls;
