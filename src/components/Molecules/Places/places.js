import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Form, Button } from "../../Atoms";
import { Card } from "../../Molecules";
import PlaceStyle from "./places.style";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Places() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });
  const navigate = useNavigate();
  const handleChange = (address) => {
    setAddress(address)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng)
        setCoordinates(latLng)
    })
      .catch(error => console.error('Error', error));
  }

   console.log(coordinates.lat)
  console.log(coordinates.lng)
  
  const handleClick = () => {
    if (address) {
      swal("Successful!", `${address} has been added. `, "success", {
        button: false,
        timer: 2000,
      });
      setAddress("")
      navigate('/my_deliveries')
    }else {
      swal("Error!", `Enter a valid address. `, "error", {
        button: false,
        timer: 2000,
      });
    }
  }
  return (
    
    <PlaceStyle>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            {/* <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}
            <div className="forms">
              <h1>Select locations to cover</h1>              
              <Form className="form-style">
              <input {...getInputProps({placeholder: 'Search Places ...',
                className: 'location-search-input'})}  />               
              {address && <h2>Result</h2>}
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
            <Button className="btn-submit" fill onClick={handleClick}>Submit Location</Button>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </PlaceStyle>
  );
}