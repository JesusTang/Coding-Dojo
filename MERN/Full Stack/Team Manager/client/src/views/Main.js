import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PlayerList from "../components/PlayerList";
import SubLinks from "../components/SubLinks";

function Main() {
  const [players, setPlayers] = useState([]);

  const fields = [
    { field_name: "Player Name", value: "player.name" },
    { field_name: "Preferred Position", value: "player.preferred_position" },
    { field_name: "Actions", value: `delete_btn` }
  ];
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => setPlayers(res.data))
      .catch((err) => console.log("Error: ", err));
  });

  return (
    <div className="container col-8 justify-content-start">
      <NavBar />
      <hr></hr>
      <SubLinks />
      <PlayerList players={players} fields={fields} />
    </div>
  );
}

export default Main;
