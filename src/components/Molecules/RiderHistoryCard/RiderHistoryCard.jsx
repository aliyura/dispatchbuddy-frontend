import React from 'react'
import RiderHistoryCardStyle from './RiderHistoryCard.style';
import profiles from '../../../assets/images/profile.png';
import { Button } from "../../Atoms";
import { format } from "date-fns/";

function RiderHistoryCard({rider}) {
  return (
    <RiderHistoryCardStyle>
      <div className="rider-info">
        <div className="rider-info_left">
          <div className="rider-info_img">
            <img height="90px" width="90px" className="rider-info_image" src={profiles} alt="Profile" />
          </div>
          <div className="rider-info_details">
            <p className="rider-info-name">{rider?.name}</p>
            <p>{rider?.coveredLocations?.filter(v => v === "Ikeja")[0]}</p>
            <p>{rider?.phoneNumber}</p>
          </div>
        </div>
        <div className="rider-info_right">
          <p>Joined, {rider?.createdDate ? format(new Date(rider?.createdDate ), "yyyy-MM-dd") : "N/A"}</p>  
          {/** Where we should send request to Rider as a user. */}
          <Button>Contact Rider</Button>
        </div>
      </div>
    </RiderHistoryCardStyle>
  );
}

export default RiderHistoryCard