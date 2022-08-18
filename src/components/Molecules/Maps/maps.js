  import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
  import MapStyle from "./maps.style";
  import { PageStyle } from "../../Atoms";
  import { Places } from "../../Molecules";
  
  const center = { lat: 6.465422, lng: 3.406448 }
  
  function Maps() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],    
    })

    if (!isLoaded) {
        return "Loading...."
    }
    
    return (
        <PageStyle>
        <MapStyle>
        <div className="intro">
        <div className="image-container" position='absolute' left={0} top={0} h='100%' w='100%'>
            <GoogleMap 
            center={center} 
            zoom={15} 
            mapContainerStyle={{width:'500px', height:'500px'}}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
            }}>
                {isLoaded}
                <Marker position={center} />
            </GoogleMap>
            </div>
        
            <Places />
    </div>
    </MapStyle>
    </PageStyle>  
    )
  }
  
  export default Maps
