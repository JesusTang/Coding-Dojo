import axios from "axios";
import { useState } from "react";

function LocationForm(props) {
  const [errors, setErrors] = useState([]);

  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [category, setCategory] = useState("");
  const [open_field, setOpen_field] = useState(false);
  const [open_entrance, setOpen_entrance] = useState(false);

  const [selected, setSelected] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/fields", {
        name,
        sport,
        lat,
        lng,
        category,
        open_field,
        open_entrance
      });
    } catch (err) {
      const errorResponse = err.response.data.errors;
      const errorArr = [];
      for (const key of Object.keys(errorResponse)) {
        errorArr.push(errorResponse[key].message);
      }
      setErrors(errorArr);
    }
  };

  return (
    <div>
      <form className="mt-1" onSubmit={onSubmitHandler}>
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
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sport</label>
          <select
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
            <option value="Fulbito">Fulbito</option>
            <option value="BasketBall">BasketBall</option>
            <option value="Tennis">Tennis</option>
            <option value="Fronton">Fronton</option>
            <option value="Baseball">Baseball</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Latitude</label>
          <input
            type="number"
            min={-90}
            max={90}
            className="form-control"
            onChange={(e) => setLat(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Longitude</label>
          <input
            type="number"
            min={-180}
            max={180}
            className="form-control"
            onChange={(e) => setLng(e.target.value)}
          />
        </div>
        <div className="mb-3">
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
        <div className="mb-3 form-check">
          <label className="form-check-label">Outdoors field?</label>
          <input
            type="checkbox"
            value={open_field}
            className="form-check-input"
            onChange={(e) => setOpen_field(!open_field)}
          />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label">Open to everyone?</label>
          <input
            type="checkbox"
            value={open_entrance}
            className="form-check-input"
            onChange={(e) => setOpen_entrance(!open_entrance)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Add Location
        </button>
      </form>
      <hr></hr>
      <p>
        Or you can also just right click on the map to add a Location on the
        spot! -{">"}
      </p>
    </div>
  );
}

export default LocationForm;
