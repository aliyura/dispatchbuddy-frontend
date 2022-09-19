import React from "react";
import { Button } from "../../Atoms";
import IconButton from "../IconButton/IconButton";
import HistoryCardStyle from "./HistoryCard.style";
import { acceptRide, rejectRide } from "../../../api/auth";
import swal from "sweetalert";

export default function HistoryCard({ delivery, onShow, request, reject, accept }) {
  const handleAccept = async () => {
    const response = await acceptRide(delivery.id);
          console.log(response);

    if (response?.status === 200) {
      swal({
        text: `You have accepted ${delivery.userName}'s request successfully.`,
        icon: "success",
        button: false,
        timer: 3000,
      });
    } else if (!response?.data?.success) {
      swal("Oops", response?.data?.error_desription, "error", {
        button: false,
        timer: 3000,
      });
    };
  }
    const handleReject = async () => {
      
      const response = await rejectRide(delivery.id);
      console.log(response);
      if (response?.status === 200) {
        swal({
          text: `${delivery.userName}'s request at ${delivery.pickupLocation} was rejected!`,
          icon: "success",
          button: false,
          timer: 3000,
        });
      } else if (!response?.data?.success) {
        swal("Oops", response?.data?.error_desription, "error", {
          button: false,
          timer: 3000,
        });
      }
    };;
    return (
      <HistoryCardStyle>
        <div className="trip-info">
          <p>{delivery?.userName}</p>
          {/* <p>{delivery?.price}</p> */}
          <p>$ 3,500</p>
          {/* <p>{delivery?.weight}</p> */}
          <p>5kg</p>
          <p>{delivery?.pickupLocation}</p>
        </div>
        {!request && (
          <div className="rating-btn" onClick={onShow}>
            <IconButton>Rate</IconButton>
          </div>
        )}
        {request && delivery.status === "PC" && (
          <div className="accept-reject">
            <Button className="history-btn" onClick={handleAccept}>
              Accept
            </Button>
            <Button className="history-btn outline" onClick={handleReject}>
              Reject
            </Button>
          </div>
        )}
        {request && delivery.status !== "PC" && (
          <div className="accept-reject">
            <Button className={delivery.status === "AC" ? "status-accept" : "status-reject"}>
              {delivery.status === "AC" ? "Accepted" : "Rejected"}
            </Button>
          </div>
        )}
      </HistoryCardStyle>
    );
  };