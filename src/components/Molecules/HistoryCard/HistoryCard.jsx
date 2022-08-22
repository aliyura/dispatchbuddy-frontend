import React from 'react'
import IconButton from '../IconButton/IconButton';
import HistoryCardStyle from './HistoryCard.style';
function HistoryCard({delivery}) {
  return (
    <HistoryCardStyle>
      <div className="trip-info">
        <p>{delivery?.userName}</p>
        {/* <p>{delivery?.price}</p> */}
        <p>$ 3,500</p>
        {/* <p>{delivery?.weight}</p> */}
        <p>5kg</p>
        <p>{delivery?.pickupLocation}</p>
      </div>
      <div className="rating-btn">
        <IconButton>Rate</IconButton>
      </div>
    </HistoryCardStyle>
  );
}

export default HistoryCard