import React from "react";
import { Button, Form, Image, PageStyle } from "../../Atoms";
import { Field, Footer, NavBar } from "../../Molecules";
import HomepageStyle from "./Homepage.style";
import Image1 from "../../../assets/images/image1.png";
import Location from "../../../assets/icons/location.svg";
function Homepage() {
  return (
    <>
      <NavBar />
      <PageStyle>
        <HomepageStyle>
          <section className="intro">
            <div className="text">
              <h3>Your trusted delivery partner</h3>
              <p>
                We are flexible and dedicated logistics delivery service.
                Experience the fastest delivery service to your doorstep
              </p>
            </div>
            <div className="image-container">
              <Image
                src={Image1}
                alt="A Dispatch Buddy rider delivering a package"
              />
              <div className="shadow"></div>
            </div>
          </section>
          <section className="search-riders">
            <div className="text">
              <h4>For Users</h4>
              <h3>Delivery Solutions just for you</h3>
              <p>
                Quickly get a list of dispatch riders for your day to day
                delivery service
              </p>
            </div>
            <div className="locator">
              <Form>
                <Field
                  label="Pick Up"
                  placeholder="Enter pick up location"
                  type="text"
                  icon={Location}
                />
                <Field
                  label="Delivery Destination"
                  placeholder="Enter delivery destination"
                  type="text"
                  icon={Location}
                  
                />
                <Button fill>Find riders</Button>
              </Form>
            </div>
          </section>
        </HomepageStyle>
      </PageStyle>
      <Footer />
    </>
  );
}

export default Homepage;
