import React from "react";
import { PageStyle } from "../../Atoms";
// import { RateNavBar } from "../../Molecules";
import RatingsStyle from "./Ratings.style";
import Rating from "react-rating";
import star from "../../../assets/icons/star.svg";
import starFull from "../../../assets/icons/starFull.svg";
import {ReactComponent as Close} from "../../../assets/icons/close.svg"
function Ratings() {
  let display = "true";
  let rating = 0;
  function handleClose() {
    
  } 
  function handleRating() {
    
  }
  return (
    <PageStyle display>
      <RatingsStyle>
        {/* <RateNavBar /> */}
        <div className="rating_header">
          <h1>Rate and Review</h1>
          <Close onClick={ handleClose} />
        </div>
        <div className="rate-container">
          <h1>Do you enjoy the experience?</h1>
          <p>
            Give us a quick rating so we know
            <br />
            if you like it
          </p>
          <div className="rate">
            <Rating
              emptySymbol={
                <img src={star} alt="An empty star rating" className="icon" />
              }
              fullSymbol={
                <img src={starFull} alt="A full star rating" className="icon" />
              }
              initialRating={rating}
              stop={5}
              start={0}
              step={1}
              onClick={(value) => handleRating(value)}
            />
          </div>
        </div>
      </RatingsStyle>
    </PageStyle>
  );
}

export default Ratings;
