import { useEffect, useMemo, useState } from "react";

function My2ndMap(props) {
  // const [centro, setCentro] = useState({
  //   lat: -12.06743,
  //   lng: -77.041307
  // });
  const [markers, setMarkers] = useState([]);
  const center = useMemo(() => ({ lat: -12.06743, lng: -77.041307 }), []);
  const markersArray = useMemo(
    () => [
      { name: "Cancha 1", sport: "basket", lat: -12.06843, lng: -77.041307 },
      { name: "Cancha 2", sport: "basket", lat: -12.06643, lng: -77.041307 },
      { name: "Cancha 3", sport: "basket", lat: -12.06543, lng: -77.041307 }
    ],
    []
  );
  useEffect(() => {
    console.log(process.env.REACT_APP_GOOGLE_API_KEY);
    setMarkers(markersArray);
  }, [markersArray]);

  // MAP RENDERING BLOCK //
  const { compose } = require("recompose");
  const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } = require("react-google-maps");
  const MapWithAMarker = compose(
    withScriptjs,
    withGoogleMap
  )((props) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={center}
      className=" col border rounded-start rounded-5"
      onClick={(e) => console.log(e)}
    >
      {markers.map((marker, key) => (
        <Marker
          key={key}
          title={marker.name}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      ))}
    </GoogleMap>
  ));
  // MAP RENDERING BLOCK //

  // NEW MAP BLOCK //
  const Map = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={center}
        onClick={(e) => console.log(e)}
      >
        {props.children}
      </GoogleMap>
    ))
  );
  // NEW MAP BLOCK //

  const onMapClick = (e) => {
    if (
      window.confirm(`Are you sure you want to add a marker to this location?`)
    ) {
      setMarkers(() => [
        ...markers,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
      ]);
    }
  };

  return (
    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div className="p-0 col" style={{ height: `80vh` }} />}
      mapElement={
        <div
          className="rounded rounded-start rounded-5"
          style={{ height: `100%` }}
        />
      }
    />
    // <MapWithAMarker
    //   googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
    //   loadingElement={<div style={{ height: `100%` }} />}
    //   containerElement={<div className="p-0 col" style={{ height: `80vh` }} />}
    //   mapElement={
    //     <div
    //       className="rounded rounded-start rounded-5"
    //       style={{ height: `100%` }}
    //     />
    //   }
    // />
  );
}

export default My2ndMap;
