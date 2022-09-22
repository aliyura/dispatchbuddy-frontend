import React, { useEffect, useContext, useState } from "react";
import PageStyle from "../../Atoms/Page.style";
import { NavBar } from "../../Molecules";
import HistoryCard from "../../Molecules/HistoryCard/HistoryCard";
import MyDeliveriesStyle from "./MyDeliveries.style";
import { getAllRequests } from "../../../api/auth";
import { AuthContext } from "../../../context/AuthProvider";
import { isToday, isYesterday, parseISO } from "date-fns/";
import Modal from "react-modal";
import Ratings from "../ratings/Ratings";
import swal from "sweetalert";

Modal.setAppElement("#root");

function MyRequest() {
  const [, dispatch] = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [rating, setRating] = useState(0);

  const success = () => {
       swal({
         text: `Thank you for rating`,
         icon: "success",
         button: false,
         timer: 3000,
       });
  }
  const handleRating = (value) => {
    setRating(value);
    success()
  };

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
    setRating(0);
  }

  useEffect(() => {
    dispatch({ type: "GET_DELIVERIES_START" });

    async function loadDeliveries() {
      const apiResponse = await getAllRequests(0);
      if (apiResponse?.data?.success) {
        setRequests(apiResponse?.data?.payload?.content);
        dispatch({
          type: "GET_DELIVERIES_SUCCESS",
          payload: apiResponse?.data?.payload?.content,
        });
      } else if (!apiResponse?.data?.success) {
        dispatch({ type: "GET_DELIVERIES_ERROR", payload: apiResponse?.error });
      } else {
        dispatch({ type: "GET_DELIVERIES_ERROR", payload: apiResponse?.error });
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
        <div className="banner">
          <h2>All Requests</h2>
        </div>
        <PageStyle id="deliveries">
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
          >
            <Ratings
              rating={rating}
              handleRating={handleRating}
              toggleModal={toggleModal}
            />
          </Modal>
          {!todaysRequests && !yesterdaysRequests && !others && (
            <h5 className="none">No requests!!</h5>
          )}
          {todaysRequests?.length >= 1 && (
            <div className="today">
              <h5>Today</h5>
              {todaysRequests?.map((request, index) => (
                <HistoryCard
                  onShow={toggleModal}
                  delivery={request}
                  key={index}
                  request
                />
              ))}
            </div>
          )}
          {yesterdaysRequests?.length >= 1 && (
            <div className="yesterday">
              <h5>Yesterday</h5>
              {yesterdaysRequests?.map((request, index) => (
                <HistoryCard
                  onShow={toggleModal}
                  delivery={request}
                  key={index}
                  request
                />
              ))}
            </div>
          )}
          {others?.length >= 1 && (
            <div className="previous">
              <h5>Older requests</h5>
              {others?.map((request, index) => (
                <HistoryCard
                  onShow={toggleModal}
                  delivery={request}
                  key={index}
                  request
                />
              ))}
            </div>
          )}
        </PageStyle>
      </MyDeliveriesStyle>
    </>
  );
}

export default MyRequest;
