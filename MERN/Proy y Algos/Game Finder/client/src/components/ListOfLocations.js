import React from "react";
import CloseButton from "./CloseButton";

function ListOfLocations(props) {
  const { markers, mapInstance, setElementToLoad } = props;
  const panToClickedMarker = (coords) => {
    mapInstance.panTo(coords);
  };
  return (
    <div className=" bg-white col-10 rounded-end pe-0 rounded-5 position-relative ps-0">
      <div className="pt-3 ms-1">
        <h5 className="mb-2 ms-2">List of fields</h5>
        <div className="scrollable ps-2 pe-3 pt-3">
          {markers &&
            markers.map((marker, key) => {
              return (
                <div
                  key={key}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    panToClickedMarker(marker.coordinates);
                  }}
                  className="border rounded rounded-4 btn-shadow pt-1 pb-3 ps-2 pe-2 mb-3"
                >
                  {marker.name && <h5 className="mt-2 wrap">{marker.name}</h5>}
                  <p className="m-0">Sport played: {marker.sport}</p>
                  <p className="m-0">
                    Level of competitiveness: {marker.category}
                  </p>
                  <p className="m-0">
                    {marker.open_field !== false
                      ? "It's an outdoors field"
                      : "it's an indoors field"}
                  </p>
                  <p className="m-0">
                    {marker.open_entrance !== false
                      ? "It's a public field"
                      : "It's a private field"}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <CloseButton setElementToLoad={setElementToLoad} />
    </div>
  );
}

export default ListOfLocations;
