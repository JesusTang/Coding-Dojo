import axios from "axios";
import { useState } from "react";
import CloseButton from "./CloseButton";

function FilterForm(props) {
  const { setMarkers, setElementToLoad } = props;
  const [errors, setErrors] = useState([]);

  const [sport, setSport] = useState("");
  const [category, setCategory] = useState("Mixed");
  const [open_field, setOpen_field] = useState(true);
  const [open_entrance, setOpen_entrance] = useState(true);

  const [selected, setSelected] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (sport !== "") {
        await axios
          .get(
            `${process.env.REACT_APP_DATABASE}/fields/${sport}/${category}/${open_field}/${open_entrance}`
          )
          .then((res) => {
            setMarkers(res.data);
            setElementToLoad("listOfLocations");
          });
      }
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
    <div className="bg-white col-10 rounded-end rounded-5 position-relative">
      <h5 className="mt-3">Filter fields by categories</h5>
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
            {/* <option value="Fulbito">Fulbito</option> */}
            <option value="BasketBall">Basketball</option>
            <option value="Tennis">Tennis</option>
            {/* <option value="Fronton">Fronton</option> */}
            <option value="Baseball">Baseball</option>
            <option value="any">Any</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Level of competitiveness</label>
          <select
            onChange={(ev) => {
              setCategory(ev.target.value);
            }}
            className="form-select"
          >
            <option value="Mixed">Mixed</option>
            <option value="Casual">Casual</option>
            <option value="Competitive">Competitive</option>
            <option value="any">Any</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Outdoors field?</label>
          <select
            onChange={(ev) => {
              setOpen_field(ev.target.value);
            }}
            className="form-select"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
            <option value="any">Any</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Open to everyone?</label>
          <select
            onChange={(ev) => {
              setOpen_entrance(ev.target.value);
            }}
            className="form-select"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
            <option value="any">Any</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Set Filters
        </button>
      </form>
      <hr></hr>
      <CloseButton setElementToLoad={setElementToLoad} />
    </div>
  );
}

export default FilterForm;
