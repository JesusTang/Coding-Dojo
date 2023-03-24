import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import PlayerForm from "../components/PlayerForm";
import SubLinks from "../components/SubLinks";

function Create() {
  const [errors, setErrors] = useState([]);
  const navegar = useNavigate();
  const createPlayer = async (player) => {
    try {
      await axios.post("http://localhost:8000/api/players", { ...player });
      navegar("/");
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
    <div className="container col-8 justify-content-start">
      <NavBar />
      <hr></hr>
      <SubLinks />
      <PlayerForm onSubmitProp={createPlayer} errors={errors} />
    </div>
  );
}

export default Create;
