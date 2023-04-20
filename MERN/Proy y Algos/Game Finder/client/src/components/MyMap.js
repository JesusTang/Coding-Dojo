import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript
} from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";

function MyMap(props) {
  const [selectedMarker, setSelectedMarker] = useState(false);
  const center = useMemo(() => ({ lat: -12.06743, lng: -77.041307 }), []);
  const [markers, setMarkers] = useState([]);
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
  const onMapClick = (e) => {
    if (
      window.confirm(`Are you sure you want to add a marker to this location?`)
    ) {
      setMarkers((markers) => [
        ...markers,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
      ]);
      // console.log(current)
    }
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  // if (map) return map;
  const map = (
    <GoogleMap
      zoom={15}
      center={center}
      // onDrag={(e) => {
      //   console.log(e);
      // }}
      // onCenterChanged={(e) => {
      //   console.log(GoogleMap.center);
      // }}
      mapContainerClassName="map-container col border rounded-start rounded-5"
      onClick={onMapClick}
      onRightClick={onMapClick}
    >
      {markers.map((marker, key) => (
        <Marker
          key={key}
          title={marker.name}
          onClick={() => {
            setSelectedMarker(marker);
          }}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      ))}

      {selectedMarker && (
        <InfoWindow
          onCloseClick={() => setSelectedMarker(false)}
          position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
        >
          <h6>{selectedMarker.name}</h6>
        </InfoWindow>
      )}
    </GoogleMap>
  );
  // console.log(map.center);
  return map;
}

export default MyMap;

// import {
//   GoogleMap,
//   InfoWindow,
//   Marker,
//   useLoadScript
// } from "@react-google-maps/api";
// import { useEffect, useMemo, useState } from "react";
// // import withScriptsjs from "react
// // import "../styles/globals.css";

// function MyMap(props) {
//   console.log(process.env.REACT_APP_GOOGLE_API_KEY);
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
//   });
//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }
//   return <Map />;
// }

// export default MyMap;

// function Map() {
//   const [selectedMarker, setSelectedMarker] = useState(false);
//   const center = useMemo(() => ({ lat: -12.06743, lng: -77.041307 }), []);
//   const [markers, setMarkers] = useState([]);
//   const markersArray = useMemo(
//     () => [
//       { name: "Cancha 1", lat: -12.06743, lng: -77.041307 },
//       { name: "Cancha 1", lat: -12.06743, lng: -77.041307 },
//       { name: "Cancha 1", lat: -12.06743, lng: -77.041307 }
//     ],
//     []
//   );
//   useEffect(() => {
//     setMarkers(markersArray);
//   }, [markersArray]);
//   const onMapClick = (e) => {
//     if (
//       window.confirm(`Are you sure you want to add a marker to this location?`)
//     ) {
//       setMarkers((current) => [
//         ...current,
//         {
//           lat: e.latLng.lat(),
//           lng: e.latLng.lng()
//         }
//       ]);
//     }
//   };
//   return (
//     <GoogleMap
//       zoom={15}
//       center={center}
//       mapContainerClassName="map-container col border rounded-start rounded-5"
//       onClick={onMapClick}
//       onRightClick={onMapClick}
//     >
//       {/* <InfoWindow position={center} /> */}
//       <Marker
//         onClick={() => {
//           setSelectedMarker(true);
//         }}
//         position={center}
//       />
//       {markers.map((marker) => (
//         <Marker
//           onClick={() => {
//             setSelectedMarker(true);
//           }}
//           position={{ lat: marker.lat, lng: marker.lng }}
//         />
//       ))}
//       {selectedMarker && (
//         <InfoWindow
//           onCloseClick={() => setSelectedMarker(false)}
//           position={center}
//         >
//           <h3>Esto es un marcador vale</h3>
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   );
// }
