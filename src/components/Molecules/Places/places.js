import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Form, Button } from "../../Atoms";
import { Card } from "../../Molecules";
import PlaceStyle from "./places.style";
export default function Places() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });
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
              <h2>Result</h2>
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
            <Button fill onClick={()=> setAddress("")}>Submit Location</Button>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </PlaceStyle>
  );
}