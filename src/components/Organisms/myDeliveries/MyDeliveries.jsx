import React, { useEffect, useContext, useState } from "react";
import PageStyle from "../../Atoms/Page.style";
import { NavBar } from "../../Molecules";
import HistoryCard from "../../Molecules/HistoryCard/HistoryCard";
import MyDeliveriesStyle from "./MyDeliveries.style";
import { getAllRequests } from "../../../api/auth";
import { AuthContext } from "../../../context/AuthProvider";
import { isToday, isYesterday, parseISO } from "date-fns/";
import Ratings from "../ratings/Ratings";
// import Ratings from "../ratings/Ratings";

// const SVGIcon = (props) => (
//   <svg className={props.className} pointerEvents="none">
//     <use xlinkHref={props.href} />
//   </svg>
// );
// <Rating
//   emptySymbol={<SVGIcon href={star} className="icon" />}
//   fullSymbol={<SVGIcon href={starFull} className="icon" />}
// />;

function MyDeliveries() {
  const [, dispatch] = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  // const [rating, setRating] = useState(0);
  const [displayRating, setDisplayRating] = useState("none");

  //  const handleRating = (value) => {
  //    setRating(value);
  //    console.log(value);
  //    console.log(rating);
  //  };
   
  const showModal = () => {
    setDisplayRating("block");
  }
  
  useEffect(() => {
    dispatch({ type: "GET_DELIVERIES_START" });

    async function loadDeliveries() {
      const { data, error } = await getAllRequests(
        0,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiVVNFUiIsImdlbmRlciI6Ik1hbGUiLCJjaXR5IjoiQWJ1amEiLCJ1c2VyX25hbWUiOiJuZXQucmFiaXVhbGl5dUBnbWFpbC5jb20iLCJhY2NvdW50VHlwZSI6IkRJU1BBVENIRVIiLCJkcCI6ImRwNjQwNDhmMzYwOTkuanBnIiwidXVpZCI6IjY0MDQ4ZjM2MDk5IiwiYXV0aG9yaXRpZXMiOlsiVVNFUiJdLCJjbGllbnRfaWQiOiJ3ZWItY2xpZW50IiwicGhvbmVOdW1iZXIiOiIwODA2NDE2MDIwNCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJpc0VuYWJsZWQiOnRydWUsIm5hbWUiOiJSYWJpdSBBbGl5dSIsImlkIjoiNjJkYTYxOTE0YTBhZDQwZGU3NzU0NDU0IiwianRpIjoiNDQ4NmU4MDEtMzNmYy00ODFkLWI3MmQtOGVmMjJjYWRhZGYxIiwiZW1haWwiOiJuZXQucmFiaXVhbGl5dUBnbWFpbC5jb20iLCJzdGF0dXMiOiJBQyJ9._-T8leEXhKsUhZrSlA10nSFoUKD0Cjoz9PVnjsaxiNI"
      );
      if (data) {
        setRequests(data);
        dispatch({ type: "GET_DELIVERIES_SUCCESS", payload: data });
      } else {
        dispatch({ type: "GET_DELIVERIES_ERROR", payload: error });
      }
    }
    loadDeliveries();
  }, [dispatch]);
  console.log(requests);
  let todaysRequests = requests?.filter(
    (request) =>
      isToday(parseISO(request?.lastModifiedDate)) === true ||
      isToday(parseISO(request?.createdDate)) === true
  );
  let yesterdaysRequests = requests?.filter(
    (request) =>
      isYesterday(parseISO(request?.lastModifiedDate)) === true ||
      isYesterday(parseISO(request?.createdDate)) === true
  );
  let others = requests?.filter(
    (request) =>
      isToday(parseISO(request?.lastModifiedDate)) === false &&
      isYesterday(parseISO(request?.lastModifiedDate)) === false &&
      isToday(parseISO(request?.createdDate)) === false &&
      isYesterday(parseISO(request?.createdDate)) === false
  );
  return (
    <>
      <NavBar />
      <MyDeliveriesStyle>
        {/* <Ratings
          display={displayRating}
          handleRating={handleRating}
          handleClose={handleClose}
          rating={rating}
        /> */}
        <div className="banner">
          <h2>My Deliveries</h2>
        </div>
        <PageStyle id="deliveries">
          <Ratings
            onClose={() => setDisplayRating("none")}
            displayRating={displayRating}
          />
          {todaysRequests?.length >= 1 && (
            <div className="today">
              <h5>Today</h5>
              {todaysRequests?.map((request, index) => (
                <HistoryCard
                  onShow={showModal}
                  delivery={request}
                  key={index}
                />
              ))}
            </div>
          )}
          {yesterdaysRequests?.length >= 1 && (
            <div className="yesterday">
              <h5>Yesterday</h5>
              {yesterdaysRequests?.map((request, index) => (
                <HistoryCard
                  onShow={showModal}
                  delivery={request}
                  key={index}
                />
              ))}
            </div>
          )}
          {others?.length >= 1 && (
            <div className="previous">
              <h5>Older requests</h5>
              {others?.map((request, index) => (
                <HistoryCard
                  onShow={showModal}
                  delivery={request}
                  key={index}
                />
              ))}
            </div>
          )}
        </PageStyle>
      </MyDeliveriesStyle>
    </>
  );
}

export default MyDeliveries;
