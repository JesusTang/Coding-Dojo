import React, { useState } from "react";
// import { Link } from "react-router-dom";

const PlayerForm = (props) => {
  const { onSubmitProp, errors } = props;
  const [name, setName] = useState("");
  const [preferred_position, setPreferred_position] = useState("");
  const [error2, setError2] = useState(true);
  const red = {
    color: "red"
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    onSubmitProp({
      name,
      preferred_position,
      activity: [
        { game: 1, status: "Undecided" },
        { game: 2, status: "Undecided" },
        { game: 3, status: "Undecided" }
      ]
    });
  };
  const validateName = (e) => {
    setName(e.target.value);
    if (e.target.value.length <= 2) {
      setError2(true);
    } else {
      setError2(false);
    }
  };

  return (
    <div className=" row justify-content-center bg-light ">
      <form className="border ps-4 pe-4 pb-4 pt-2" onSubmit={onSubmitHandler}>
        <h4>Add Player</h4>
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
        <label className="form-label">Name: </label>
        <br></br>
        <input
          className="form-control mb-3"
          type="text"
          onChange={(e) => validateName(e)}
          value={name}
        />
        {error2 ? (
          <p style={red}> *Name must be at least 2 characters in length </p>
        ) : (
          <p></p>
        )}
        <label className="form-label">Preferred Position: </label>
        <br></br>
        <input
          className="form-control mb-3"
          type="text"
          onChange={(e) => setPreferred_position(e.target.value)}
          value={preferred_position}
        />
        {error2 ? (
          <input className="btn btn-secondary" disabled type="submit" />
        ) : (
          <input className="btn btn-secondary" type="submit" />
        )}
      </form>
    </div>
  );
};

export default PlayerForm;
