import React from 'react'
import RiderHistoryCardStyle from './RiderHistoryCard.style';
import profiles from '../../../assets/images/profile.png';
import { Button } from "../../Atoms";

function RiderHistoryCard({rider}) {
  return (
    <RiderHistoryCardStyle>
      <div className="rider-info">
        <div className="rider-info_left">
          <div className="rider-info_img">
            <img  className="rider-info_image" src={profiles} alt="Profile" />
          </div>
          <div className="rider-info_details">
            <p>{rider?.name}</p>
            <p>{rider?.location}</p>
            <p>{rider?.phoneNumber}</p>
          </div>
        </div>
        <div className="rider-info_right">
          <p>{rider?.date}</p>  
          <Button>{rider?.contactRider}</Button>
        </div>
      </div>
    </RiderHistoryCardStyle>
  );
}

export default RiderHistoryCard