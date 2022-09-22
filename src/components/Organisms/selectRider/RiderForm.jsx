import React, { useEffect, useState, useCallback } from "react";
import { getAllRiders } from "../../../api/auth";
import { NavBar, Footer } from "../../Molecules";
import RiderRequestForm from "../../Molecules/RiderRequestForm/RiderRequestForm";
import SelectRiderStyle from "./SelectRider.style";

function RiderForm() {
    const [dataOfRiders, setDataOfRiders] = useState([]);
    const pickup = localStorage.getItem('pickup');
    const destination = localStorage.getItem('destination');
    
    const loadRiders = useCallback(async () => {
      try {
        const response = await getAllRiders(0, pickup, destination);
        console.log(response, 'data from riders on Select Riders.... stuff...?>>>>');
        if (response?.data?.success) {
          setDataOfRiders(response?.data?.payload?.content);
        }
      } catch (err) {
        return {
          data: null,
          error: err,
        };
      }
    }, [destination, pickup])

    useEffect(() => {
      loadRiders();
    },[loadRiders])
    
    return (
    <>
      <NavBar />
      <SelectRiderStyle>
        <div className="banner">
          <h2>Contact your Dispatch Riders</h2>
          <h3>We have them all just for you. Make your Order to your favorite dispatch rider.</h3>
        </div>
        <div className="today">
          <RiderRequestForm/>
        </div>
      </SelectRiderStyle>
      <Footer />
    </>
  );
}

export default RiderForm;
