import axios from "axios";
import { useEffect, useRef, useState } from "react";
import MyMap from "../components/MyMap";
import Popup from "../components/Popup";
import SideBar from "../components/SideBar";
import Welcome from "../components/Welcome";

function HomePage(props) {
  const [markers, setMarkers] = useState([]);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [selectedMarker, setSelectedMarker] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [elementToLoad, setElementToLoad] = useState("listOfLocations");
  const [mapInstance, setMapInstance] = useState(null);
  const mapSection = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DATABASE}/fields`).then((res) => {
      setMarkers(res.data);
      console.log(res.data);
    });
  }, [lat, lng]);

  const onMapClick = (e) => {
    if (window.confirm(`Are you sure you want to mark this coordinates?`)) {
      setLat(e.latLng.lat());
      setLng(e.latLng.lng());
      setElementToLoad("locationForm");
    }
  };

  return (
    <div className="p-7">
      <div className="row row-1">
        <Welcome scrollToSection={scrollToSection} mapSection={mapSection} />
      </div>
      <div ref={mapSection} className="row row-1">
        <div className="row rounded-5 box-shadow p-0">
          <SideBar
            lat={lat}
            lng={lng}
            setMarkers={setMarkers}
            markers={markers}
            setElementToLoad={setElementToLoad}
            elementToLoad={elementToLoad}
            mapInstance={mapInstance}
          />
          <MyMap
            markers={markers}
            onMapClick={onMapClick}
            setSelectedMarker={setSelectedMarker}
            selectedMarker={selectedMarker}
            setTrigger={setTrigger}
            setMapInstance={setMapInstance}
          />
          {trigger ? (
            <Popup
              setSelectedMarker={setSelectedMarker}
              marker={selectedMarker}
              trigger={trigger}
              setTrigger={setTrigger}
              markers={markers}
              setMarkers={setMarkers}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
