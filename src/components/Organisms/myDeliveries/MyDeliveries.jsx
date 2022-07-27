import React from "react";
import PageStyle from "../../Atoms/Page.style";
import HistoryCard from "../../Molecules/HistoryCard/HistoryCard";
import MyDeliveriesStyle from "./MyDeliveries.style";

function MyDeliveries() {
  return (
    <MyDeliveriesStyle>
      <div className="banner">
        <h2>My Deliveries</h2>
      </div>
      <PageStyle>
        <HistoryCard />
      </PageStyle>
    </MyDeliveriesStyle>
  );
}

export default MyDeliveries;
