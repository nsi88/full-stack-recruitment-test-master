import React from 'react';
import './Controls.scss';
import priceAlerts from '../../icons/price-alerts.svg';

const Controls = () => (
  <div className='controls'>
    <div>
      <span className='control'>Filter</span>
      <span className='control'>Sort</span>
    </div>
    <div>
      <span className='control'>
        <img className='priceAlerts' role='presentation' src={priceAlerts}/>
        Price alerts
      </span>
    </div>
  </div>
);

export default Controls;
