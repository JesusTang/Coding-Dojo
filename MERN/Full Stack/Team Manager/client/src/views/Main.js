import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PlayerList from "../components/PlayerList";
import SubLinks from "../components/SubLinks";

function Main() {
  const [players, setPlayers] = useState([]);

  const removeFromDom = (playerId) => {
    setPlayers(players.filter((player) => player._id !== playerId));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => setPlayers(res.data))
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <div className="container col-8 justify-content-start">
      <NavBar />
      <hr></hr>
      <SubLinks />
      <PlayerList players={players} removeFromDom={removeFromDom} />
    </div>
  );
}

export default Main;
