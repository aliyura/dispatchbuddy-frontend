import React from "react";
import { Form, Image, PageStyle } from "../../Atoms";
import { Field, RNavBar, Card } from "../../Molecules";
import RidersLocationStyle from "./RidersLocation.style";
import Location from "../../../assets/images/location.png";

function RidersLocation() {
  return (
    <>
      <RNavBar />
      <PageStyle>
        <RidersLocationStyle>
        <div className="intro">
          <div className="image-container">
            <Image
                src={Location}
                alt="A Google map image of delivery locations in Lagos State"
            />
          </div> 
            
          <div className="forms">
              <h1>Select locations to cover</h1>
              <Form className="form-style">
              <Field placeholder="Lagos" type="text" />
              <h2>Result</h2>
              </Form>
              <div className="card-wrapper">
              <Card label="Ikeja"/>
              <Card label="Victoria Island"/>
              <Card label="Lekki"/>
              <Card label="Ikotun"/>
              <Card label="Idimu"/>
              <Card label="Ikoyi"/>
              <Card label="Iyana Ipaja"/>
              </div>
              <h2>Show more</h2>
            </div>
            
          </div> 
        </RidersLocationStyle>
      </PageStyle>
    </>
  );
}

export default RidersLocation;
