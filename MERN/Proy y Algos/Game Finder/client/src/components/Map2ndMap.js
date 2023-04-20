function My2ndMap(props) {
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
      defaultCenter={{ lat: -12.066558345320686, lng: -77.04153728520194 }}
      className=" col border rounded-start rounded-5"
      onClick={(e) => {
        console.log(e.latLng.lat());
      }}
    >
      <Marker
        position={{ lat: -12.066558345320686, lng: -77.04153728520194 }}
      />
    </GoogleMap>
  ));
  const map = new MapWithAMarker();
  console.log(map);
  return (
    <MapWithAMarker
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
  );
}

export default My2ndMap;
