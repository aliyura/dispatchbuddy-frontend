import React, { useEffect, useContext, useState } from "react";
import { getAllRiders } from "../../../api/auth";
import { AuthContext } from "../../../context/AuthProvider";
import { NavBar, Footer } from "../../Molecules";
import RiderHistoryCard from "../../Molecules/RiderHistoryCard/RiderHistoryCard";
import SelectRiderStyle from "./SelectRider.style";

function SelectRider() {
    const [, dispatch] = useContext(AuthContext);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        dispatch({ type: "GET_RIDER_START" });
    
        async function loadRiders() {
          // const { data, error } = await getAllRiders(
          //   0
          // );
          const result = await getAllRiders(0);
          console.log(result, 'result from api get All riders....');
          if (result) {
            setRequests(result?.data?.payload?.content);
            dispatch({ type: "GET_RIDER_SUCCESS", payload: result?.payload });
          } else {
            dispatch({ type: "GET_RIDER_ERROR", payload: result.message });
          }
        }
        console.log('inside useEffect for loading Riders....');
        loadRiders()
        getAllRiders()
      }, [dispatch]);
      console.log({requests}, 'requests...stuffs');
    return (
    <>
      <NavBar />
      <SelectRiderStyle>
        <div className="banner">
          <h2>Select from the list of<br />Dispatch Riders</h2>
          <h3>We have them all just for you. Select a dispatch rider.</h3>
        </div>
        <div className="today">
        {requests?.map(
            (request, index) =>
             (<RiderHistoryCard rider={request} key={index} />)
        )}
        {requests?.map(
            (request, index) =>
             (<RiderHistoryCard rider={request} key={index} />)
        )}
        {requests?.map(
            (request, index) =>
             (<RiderHistoryCard rider={request} key={index} />)
        )}
        {requests?.map(
            (request, index) =>
             (<RiderHistoryCard rider={request} key={index} />)
        )}
        {requests?.map(
            (request, index) =>
             (<RiderHistoryCard rider={request} key={index} />)
        )}
        </div>
      </SelectRiderStyle>
      <Footer />
    </>
  );
}

export default SelectRider;
