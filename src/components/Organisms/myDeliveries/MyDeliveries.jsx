import React from "react";
import PageStyle from "../../Atoms/Page.style";
import { NavBar } from "../../Molecules";
import HistoryCard from "../../Molecules/HistoryCard/HistoryCard";
import MyDeliveriesStyle from "./MyDeliveries.style";
import orders from "./orders.json";

function MyDeliveries() {
  return (
    <>
      <NavBar />
      <MyDeliveriesStyle>
        <div className="banner">
          <h2>My Deliveries</h2>
        </div>
        <PageStyle id="deliveries">
          <div className="today">
            <h5>Today</h5>
            {orders.deliveries.map(
              (order, index) =>
                index <= 3 && <HistoryCard delivery={order} key={index} />
            )}
          </div>
          <div className="yesterday">
            <h5>Yesterday</h5>
            {orders.deliveries.map(
              (order, index) =>
                (index > 3 || index < 5) && (
                  <HistoryCard delivery={order} key={index} />
                )
            )}
          </div>
          <div className="previous">
            <h5>Others</h5>
            {orders.deliveries.map(
              (order, index) =>
                (index > 3 || index < 5) && (
                  <HistoryCard delivery={order} key={index} />
                )
            )}
          </div>
        </PageStyle>
      </MyDeliveriesStyle>
    </>
  );
}

export default MyDeliveries;
