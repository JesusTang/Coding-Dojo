import FilterForm from "./FilterForm";
import ListOfLocations from "./ListOfLocations";
import LocationForm from "./LocationForm";

function SideBar(props) {
  const {
    lat,
    lng,
    setMarkers,
    markers,
    elementToLoad,
    setElementToLoad,
    mapInstance
  } = props;

  return (
    <div
      className={
        elementToLoad !== ""
          ? "row bg-dark-purple col-3 rounded-5"
          : "row bg-dark-purple col-05 rounded-end rounded-5"
      }
    >
      <div
        className={
          elementToLoad !== ""
            ? "col-2 rounded-5 position-relative pt-5"
            : "rounded-5  col ps-1 pe-3 pt-5"
        }
      >
        <button
          className="btn btn-light btn p-2 mt-3 mb-3"
          onClick={() => {
            setElementToLoad("listOfLocations");
          }}
        >
          <img src="./list.png" style={{ width: "100%" }} alt="" />
        </button>
        <button
          className="btn btn-light btn p-2 mt-3 mb-3"
          onClick={() => {
            setElementToLoad("filterForm");
          }}
        >
          <img src="./filter.png" style={{ width: "100%" }} alt="" />
        </button>
        <button
          className="btn btn-light btn p-2 mt-3"
          onClick={() => {
            setElementToLoad("locationForm");
          }}
        >
          <img src="./plus.png" style={{ width: "100%" }} alt="" />
        </button>
      </div>
      {elementToLoad === "locationForm" && (
        <LocationForm
          latx={lat}
          lngy={lng}
          setMarkers={setMarkers}
          markers={markers}
          setElementToLoad={setElementToLoad}
        />
      )}
      {elementToLoad === "filterForm" && (
        <FilterForm
          setMarkers={setMarkers}
          setElementToLoad={setElementToLoad}
        />
      )}
      {elementToLoad === "listOfLocations" && (
        <ListOfLocations
          markers={markers}
          mapInstance={mapInstance}
          setElementToLoad={setElementToLoad}
        />
      )}
    </div>
  );
}

export default SideBar;
