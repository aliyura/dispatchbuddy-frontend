import React from "react";
import PageStyle from "../../Atoms/Page.style";
import { NavBar, Footer } from "../../Molecules";
import RiderHistoryCard from "../../Molecules/RiderHistoryCard/RiderHistoryCard";
import SelectRiderStyle from "./SelectRider.style";
import riders from "./riders.json";

function SelectRider() {
  return (
    <>
      <NavBar />
      <SelectRiderStyle>
        <div className="banner">
          <h2>Select from the list of<br />Dispatch Riders</h2>
          <h3>We have them all just for you. Select a dispatch rider.</h3>
        </div>
        <PageStyle id="rider">
        <div className="today">
        {riders.riders.map(
            (ride, index) =>
             (<RiderHistoryCard rider={ride} key={index} />)
        )}
        </div>
        </PageStyle>
      </SelectRiderStyle>
      <Footer />
    </>
  );
}

export default SelectRider;
