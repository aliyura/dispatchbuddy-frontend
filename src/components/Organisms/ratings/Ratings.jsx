import React from "react";
import { PageStyle } from "../../Atoms";
import { RateNavBar, Rating } from "../../Molecules";
import RatingsStyle from "./Ratings.style";

function Ratings() {
  return (
    <>
      <RateNavBar />
      <PageStyle>
        <RatingsStyle>
        <div className="rate-container"> 
            
            <h1>Do you enjoy the experience?</h1>
            <p>Give us a quick rating so we know<br/>if you like it</p>
            <div className="rate">
              <Rating/>
              <Rating/>
              <Rating/>
              <Rating/>
              <Rating/>
            </div>

        </div>
            
        </RatingsStyle>
      </PageStyle>
    </>
  );
}

export default Ratings;
