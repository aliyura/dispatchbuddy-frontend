import React, {useState} from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import PlacesAutocomplete from "react-places-autocomplete";
import PlaceStyle from "../../Molecules/Places/places.style";
import { Button, Form, Image, PageStyle, } from "../../Atoms";
import { Field, Footer, NavBar } from "../../Molecules";
import HomepageStyle from "./Homepage.style";
import Image1 from "../../../assets/images/image1.png";
import Location from "../../../assets/icons/location.svg";
import { useAuth } from "../../../context/AuthProvider";
import { Card } from "../../Molecules";

function Homepage() {
  const [{isAuthenticated}] = useAuth();
  console.log(isAuthenticated, 'state at Landing Page');

const [pickUpAddress, setPickUpAddress] = useState("");
const [deliveryAddress, setDeliveryAddress] = useState("");

const [pickUpLocations, setPickUpLocations] = useState([]);
const [deliveryLocations, setDeliveryLocations] = useState([]);

const handlePickUpChange = (pickUpAddress) => {
    try {
      setPickUpAddress(pickUpAddress)
    } catch (error) {
        console.log('Error', error);
    }
    
}

const handleDeliveryChange = (deliveryAddress) => {
  try {
    setDeliveryAddress(deliveryAddress)
  } catch (error) {
      console.log('Error', error);
  }
}

const handlePickUpSelect = async () => {
  try {
      const results = await geocodeByAddress(pickUpAddress);
      console.log(results, 'results....')
      const latLng = await getLatLng(results[0]);
      if(latLng){
          console.log(results[0].address_components[0].short_name, 'String address chosen');
          // setCoordinates(latLng)
          // const mapped = {[`${results[0].address_components[0].short_name}`]: latLng};
          setPickUpLocations([...pickUpLocations].concat(`${results[0].address_components[0].short_name}`));
      }
  } catch (error) {
      //show error on page.
      console.log('Error', error);
  }
}

const handleDeliverySelect = async () => {
    try {
        const results = await geocodeByAddress(deliveryAddress);
        console.log(results, 'results....')
        const latLng = await getLatLng(results[0]);
        if(latLng){
            console.log(results[0].address_components[0].short_name, 'String address chosen');
            // setCoordinates(latLng)
            // const mapped = {[`${results[0].address_components[0].short_name}`]: latLng};
            setDeliveryLocations([...deliveryLocations].concat(`${results[0].address_components[0].short_name}`));
        }
    } catch (error) {
        //show error on page.
        console.log('Error', error);
    }
}

  // const [address, setAddress] = useState("");
  // const [locations, setLocations] = useState([]);

  // const handleChange = (address) => {
  //   try {
  //     setAddress(address)
  //   } catch (error) {
  //     console.log('Error', error);
  //   }  
  // }
    
  // const handleSelect = async () => {
  //   try {
  //       const results = await geocodeByAddress(address);
  //       console.log(results, 'results....')
  //       const latLng = await getLatLng(results[0]);
  //       if(latLng){
  //         console.log(results[0].address_components[0].short_name, 'String address chosen');
  //         // setCoordinates(latLng)
  //         setLocations([...locations].concat(`${results[0].address_components[0].short_name}`));
  //       }
  //   } catch (error) {
  //     //show error on page.
  //     console.log('Error', error);
  //   }
  // }

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
              <Form locator>
                <Field
                  label="Pick Up"
                  placeholder="Enter pick up location"
                  type="text"
                  icon={Location}
                />
                {/* 
                <Field
                  label="Delivery Destination"
                  placeholder="Enter delivery destination"
                  type="text"
                  icon={Location}
                />
                
                <FieldStyle>
                  <label className="label">{label}</label>
                  <div className="input-wrapper">
                    {icon && (
                      <div className="icon">
                        <Image src={icon} alt={`${label}'s icon`} />
                      </div>
                    )}
                    <Input
                      type={type}
                      placeholder={placeholder}
                      className={className}
                      name={name}
                      value={value}
                      onChange={handleChange}
                    />
                  </div>
                </FieldStyle>
                */}

                <PlaceStyle>
                  <PlacesAutocomplete
                    value={pickUpAddress}
                    onChange={handlePickUpChange}
                    onSelect={handlePickUpSelect}
                    googleCallbackName="initOne"
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                      <div>
                        <div className="forms">
                          {/* <h1>Select locations to cover</h1> */}
                          <Form className="form-style">
                          <input {...getInputProps({placeholder: 'Enter pick up location',
                            className: 'location-search-input'})}  />
                            {/* Use array length checker */}
                          {pickUpLocations.length > 0 && 
                            <div className="box-wrapper">
                              {pickUpLocations.map((item, idx) => 
                                <div key={idx} className="box">
                                  <span>{item}</span>
                                  {/* <span onClick={removeHandler(idx)} className="closer">X</span> */}
                                </div>
                              )}
                              
                            </div>}
                          </Form>
                          
                        </div>
                        <div>
                          {suggestions.map(suggestion => {
                            return (
                              <div {...getSuggestionItemProps(suggestion)}>
                                <Card label={suggestion.description}/>
                              </div>
                            );
                          })}
                        {/* <Button className="btn-submit" fill onClick={handleClick}>Submit Location</Button> */}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                  <PlacesAutocomplete
                    value={deliveryAddress}
                    onChange={handleDeliveryChange}
                    onSelect={handleDeliverySelect}
                    googleCallbackName="initOne_2"
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                      <div>
                        <div className="forms">
                          {/* <h1>Select locations to cover</h1> */}
                          <Form className="form-style">
                          <input {...getInputProps({placeholder: 'Enter delivery destination',
                            className: 'location-search-input'})}  />
                            {/* Use array length checker */}
                          {deliveryLocations.length > 0 && 
                            <div className="box-wrapper">
                              {deliveryLocations.map((item, idx) => 
                                <div key={idx} className="box">
                                  <span>{item}</span>
                                  {/* <span onClick={removeHandler(idx)} className="closer">X</span> */}
                                </div>
                              )}
                              
                            </div>}
                          </Form>
                          
                        </div>
                        <div>
                          {suggestions.map(suggestion => {
                            return (
                              <div {...getSuggestionItemProps(suggestion)}>
                                <Card label={suggestion.description}/>
                              </div>
                            );
                          })}
                        {/* <Button className="btn-submit" fill onClick={handleClick}>Submit Location</Button> */}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                </PlaceStyle>

                <Button fill type="button">Find riders</Button>
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
