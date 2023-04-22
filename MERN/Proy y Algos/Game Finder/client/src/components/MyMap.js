import {
  GoogleMap,
  InfoWindow,
  Marker,
  // MarkerClusterer,
  useLoadScript
} from "@react-google-maps/api";
import { useMemo } from "react";

function MyMap(props) {
  const {
    onMapClick,
    markers,
    selectedMarker,
    setSelectedMarker,
    setTrigger,
    setMapInstance
  } = props;
  const center = useMemo(() => ({ lat: -12.06743, lng: -77.041307 }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  const markerIcon = (sport) => {
    if (sport === "Soccer") {
      return "./Map Markers/Soccer.png";
    }
    if (sport === "BasketBall") {
      return "./Map Markers/Basketball.png";
    }
    if (sport === "Tennis") {
      return "./Map Markers/Tennis.png";
    }
    if (sport === "Baseball") {
      return "./Map Markers/Baseball.png";
    }
  };
  return (
    <GoogleMap
      zoom={13}
      center={center}
      mapContainerClassName="map-container col rounded-start rounded-5"
      onClick={() => setSelectedMarker(false)}
      onRightClick={onMapClick}
      onLoad={(mapIns) => setMapInstance(mapIns)}
    >
      {markers.map((marker, key) => (
        <Marker
          key={key}
          title={marker.name}
          onClick={() => {
            setSelectedMarker(marker);
          }}
          position={{
            lat: marker.coordinates.lat,
            lng: marker.coordinates.lng
          }}
          animation={window.google.maps.Animation.DROP}
          icon={markerIcon(marker.sport)}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          onCloseClick={() => setSelectedMarker(false)}
          position={{
            lat: selectedMarker.coordinates.lat,
            lng: selectedMarker.coordinates.lng
          }}
        >
          <div>
            <h6>{selectedMarker.name}</h6>
            <p>Sport: {selectedMarker.sport}</p>
            <p>Competitiveness: {selectedMarker.category}</p>
            {selectedMarker.open_field ? (
              <p>Outdoors field</p>
            ) : (
              <p>Indoors field</p>
            )}
            {selectedMarker.open_entrance ? (
              <p className="m-0 p-0">Anyone can enter</p>
            ) : (
              <p>Not anyone can enter (Paid entrance, members only, etc)</p>
            )}
            <div className="row">
              <p className="p-clickable" onClick={() => setTrigger(true)}>
                Edit
              </p>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default MyMap;

// <MarkerClusterer>
//   {(clusterer) => (
//     <div>
//       {markers.map((marker, key) => (
//         <Marker
//           key={key}
//           title={marker.name}
//           onClick={() => {
//             setSelectedMarker(marker);
//           }}
//           position={{
//             lat: marker.coordinates.lat,
//             lng: marker.coordinates.lng
//           }}
//           animation={window.google.maps.Animation.DROP}
//           icon={markerIcon(marker.sport)}
//         />
//       ))}
//     </div>
//   )}
// </MarkerClusterer>
