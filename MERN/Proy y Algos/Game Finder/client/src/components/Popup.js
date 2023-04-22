import axios from "axios";
import React, { useEffect, useState } from "react";

function Popup(props) {
  const {
    trigger,
    setTrigger,
    marker,
    setMarkers,
    markers,
    setSelectedMarker
  } = props;
  const [errors, setErrors] = useState([]);

  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [category, setCategory] = useState("");
  const [open_field, setOpen_field] = useState(false);
  const [open_entrance, setOpen_entrance] = useState(false);
  const [id, setId] = useState(0);
  useEffect(() => {
    setName(marker.name);
    setSport(marker.sport);
    setLat(marker.coordinates.lat);
    setLng(marker.coordinates.lng);
    setCategory(marker.category);
    setOpen_entrance(marker.open_entrance);
    setOpen_field(marker.open_field);
    axios
      .get(
        `${process.env.REACT_APP_DATABASE}/fields/id/${marker.coordinates.lat}/${marker.coordinates.lng}`
      )
      .then((res) => setId(res.data));
  }, [marker]);
  var newMarker = {
    name,
    sport,
    coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) },
    category,
    open_field,
    open_entrance
  };
  const removeFromDom = (coordinates) => {
    setMarkers(markers.filter((marker) => marker.coordinates !== coordinates));
  };
  const onDeleteHandler = (e) => {
    e.preventDefault();
    if (window.confirm(`Are you sure you want to remove this field ${name}?`)) {
      axios.delete(`${process.env.REACT_APP_DATABASE}/fields/${id}/delete`);
      removeFromDom(marker.coordinates);
      setTrigger(false);
      setSelectedMarker(false);
    }
  };
  const onSubmitHandler = async (e) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_DATABASE}/fields/${id}/edit`,
        newMarker
      );
      setTrigger(false);
    } catch (err) {
      const errorResponse = err.response.data.errors;
      const errorArr = [];
      for (const key of Object.keys(errorResponse)) {
        errorArr.push(errorResponse[key].message);
      }
      setErrors(errorArr);
    }
  };

  return trigger ? (
    <div className="popup">
      <div className="bg-gray"></div>
      <div className="popup-inner rounded rounded-5 box-shadow">
        <form className="mt-1" onSubmit={onSubmitHandler}>
          {/* {errors.map((err, index) => {
            return (
              <h6
                style={{ backgroundColor: "#f7d6d9" }}
                className=" text-danger card p-2"
                key={index}
              >
                {err}
              </h6>
            );
          })} */}
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Sport</label>
            <select
              value={sport}
              onChange={(ev) => {
                setSport(ev.target.value);
              }}
              className="form-select"
            >
              <option
                // selected={sport === "Soccer" ? true : false}
                value="Soccer"
              >
                Soccer
              </option>
              {/* <option selected={sport === "Fulbito" ? true : false} value="Fulbito"> Fulbito </option> */}
              <option
                // selected={sport === "BasketBall" ? true : false}
                value="BasketBall"
              >
                BasketBall
              </option>
              <option
                // selected={sport === "Tennis" ? true : false}
                value="Tennis"
              >
                Tennis
              </option>
              {/* <option selected={sport === "Fronton" ? true : false} value="Fronton"> Fronton </option> */}
              <option
                // selected={sport === "Baseball" ? true : false}
                value="Baseball"
              >
                Baseball
              </option>
            </select>
          </div>
          <div className="mb-2">
            <label className="form-label">Latitude</label>
            <input
              type="float"
              value={lat}
              min={-90}
              max={90}
              className="form-control"
              onChange={(e) => setLat(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Longitude</label>
            <input
              type="float"
              value={lng}
              min={-180}
              max={180}
              className="form-control"
              onChange={(e) => setLng(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Level of competitiveness</label>
            <select
              value={category}
              onChange={(ev) => {
                setCategory(ev.target.value);
              }}
              className="form-select"
            >
              <option
                value="Mixed"
                // selected={category === "Mixed" ? true : false}
              >
                Mixed
              </option>
              <option
                // selected={category === "Casual" ? true : false}
                value="Casual"
              >
                Casual
              </option>
              <option
                // selected={category === "Competitive" ? true : false}
                value="Competitive"
              >
                Competitive
              </option>
            </select>
          </div>
          <div className="mb-2 form-check">
            <label className="form-check-label">Outdoors field?</label>
            <input
              type="checkbox"
              value={open_field}
              className="form-check-input"
              checked={open_field}
              onChange={(e) => setOpen_field(!open_field)}
            />
          </div>
          <div className="mb-2 form-check">
            <label className="form-check-label">Open to everyone?</label>
            <input
              type="checkbox"
              value={open_entrance}
              checked={open_entrance}
              className="form-check-input"
              onChange={(e) => setOpen_entrance(!open_entrance)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-0">
            Edit
          </button>
        </form>
        <button
          className="close-btn btn btn-secondary"
          onClick={() => setTrigger(false)}
        >
          Close
        </button>
        <form>
          <button
            type="submit"
            className="delete-btn btn btn-danger m-4"
            onClick={(e) => onDeleteHandler(e)}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
