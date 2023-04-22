import axios from "axios";
import { useEffect, useState } from "react";
import CloseButton from "./CloseButton";

function LocationForm(props) {
  const { latx, lngy, setMarkers, markers, setElementToLoad } = props;
  const [errors, setErrors] = useState([]);

  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [category, setCategory] = useState("Mixed");
  const [open_field, setOpen_field] = useState(false);
  const [open_entrance, setOpen_entrance] = useState(false);
  const [coordinates, setCoordinates] = useState({});

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setLat(latx);
    setLng(lngy);
    setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lng) });
  }, [latx, lngy]);

  var newMarker = {
    name,
    sport,
    coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) },
    category,
    open_field,
    open_entrance
  };

  const resetStates = () => {
    setMarkers([...markers, newMarker]);
    setName("");
    setSport("");
    setLat(0);
    setLng(0);
    setCategory("");
    setOpen_field(false);
    setOpen_entrance(false);
    setSelected(false);
    setErrors([]);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (lat === 0 && lng === 0) {
        setErrors(["Can't set marker at latitude 0 and longitude 0"]);
        return;
      }
      await axios.post(`${process.env.REACT_APP_DATABASE}/fields`, newMarker);
      resetStates();
    } catch (err) {
      if (err.response.data.code === 11000) {
        console.log("Codigo de error 1100, coordenada ya existe");
        setErrors(["This location already exists"]);
        return;
      }
      const errorResponse = err.response.data.errors;
      const errorArr = [];
      for (const key of Object.keys(errorResponse)) {
        errorArr.push(errorResponse[key].message);
      }
      setErrors(errorArr);
    }
  };

  return (
    <div className="bg-white col-10 rounded-end rounded-5 position-relative">
      <h5 className="mt-3">Add a location to the map</h5>
      <form className="mt-1 scrollable" onSubmit={onSubmitHandler}>
        {errors.map((err, index) => {
          return (
            <h6
              style={{ backgroundColor: "#f7d6d9" }}
              className=" text-danger card p-2"
              key={index}
            >
              {err}
            </h6>
          );
        })}
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
              setSelected(true);
              setSport(ev.target.value);
            }}
            className="form-select"
          >
            {!selected ? (
              <option defaultValue={""}>Select a sport</option>
            ) : null}
            <option value="Soccer">Soccer</option>
            {/* <option value="Fulbito">Fulbito</option> */}
            <option value="BasketBall">BasketBall</option>
            <option value="Tennis">Tennis</option>
            {/* <option value="Fronton">Fronton</option> */}
            <option value="Baseball">Baseball</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="form-label">Latitude</label>
          <input
            type="number"
            step={"any"}
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
            type="number"
            step={"any"}
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
            onChange={(ev) => {
              setSelected(true);
              setCategory(ev.target.value);
            }}
            className="form-select"
          >
            <option value="Mixed">Mixed</option>
            <option value="Casual">Casual</option>
            <option value="Competitive">Competitive</option>
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
          Add Location
        </button>
        <hr></hr>
        <p>You can add the coordinates by right clicking the map! -{">"}</p>
      </form>
      <CloseButton setElementToLoad={setElementToLoad} />
    </div>
  );
}

export default LocationForm;
