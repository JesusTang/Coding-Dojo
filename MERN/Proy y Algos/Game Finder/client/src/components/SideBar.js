import { useState } from "react";
import FilterForm from "./FilterForm";
import LocationForm from "./LocationForm";

function SideBar(props) {
  const [loadLocationForm, setLoadLocationForm] = useState(false);
  const [loadFilterForm, setLoadFilterForm] = useState(true);
  return (
    <div className="row bg-dark-purple col-3 rounded-5">
      <div className="col-2 rounded-5 position-relative pt-5">
        <button
          className="btn btn-light btn p-2 mb-3"
          onClick={() => {
            setLoadLocationForm(false);
            setLoadFilterForm(true);
          }}
        >
          <img src="./filter.png" style={{ width: "100%" }} alt="" />
        </button>
        <button
          className="btn btn-light btn p-2 mt-3"
          onClick={() => {
            setLoadLocationForm(true);
            setLoadFilterForm(false);
          }}
        >
          <img src="./plus.png" style={{ width: "100%" }} alt="" />
        </button>
      </div>
      <div className="bg-white col rounded-end rounded-5">
        <h5 className="mt-3">Add a location to the map</h5>
        {loadLocationForm && <LocationForm />}
        {loadFilterForm && <FilterForm />}
      </div>
    </div>
  );
}

export default SideBar;
