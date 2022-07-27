import React from 'react'
// import Button from '../../Atoms/Button.style';
import IconButton from '../IconButton/IconButton';

function HistoryCard() {
  return (
    <div>
      <div className="trip-info">
        <p>Uche Okoro</p>
        <p>N3,5000</p>
        <p>3kg</p>
        <p>Ikeja, Lagos</p>
      </div>
      <div className="rating-btn">
        {/* <Button type="button">Rate</Button> */}
        <IconButton>Rate</IconButton>
      </div>
    </div>
  );
}

export default HistoryCard