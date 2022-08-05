import React from 'react'
import IconButton from '../IconButton/IconButton';
import HistoryCardStyle from './HistoryCard.style';
function HistoryCard({delivery}) {
  return (
    <HistoryCardStyle>
      <div className="trip-info">
        <p>{delivery?.name}</p>
        <p>{delivery?.price}</p>
        <p>{delivery?.weight}</p>
        <p>{delivery?.location}</p>
      </div>
      <div className="rating-btn">
        <IconButton>Rate</IconButton>
      </div>
    </HistoryCardStyle>
  );
}

export default HistoryCard