import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import PlayerListGameStatus from "../components/PlayerListGameStatus";

function GameStatus(props) {
  const { game_number } = useParams();
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => setPlayers(res.data));
  }, []);

  return (
    <div className="container col-8">
      <NavBar />
      <div className="border p-3">
        <h1>Player Status - Game {game_number}</h1>
        <hr></hr>
        <h6 className="text-center mb-3 d-flex justify-content-center">
          <Link className="me-2 ms-2" to="/status/game/1">
            Game 1
          </Link>
          |
          <Link className="me-2 ms-2" to="/status/game/2">
            Game 2
          </Link>
          |
          <Link className="me-2 ms-2" to="/status/game/3">
            Game 3
          </Link>
        </h6>
        <PlayerListGameStatus players={players} />
      </div>
    </div>
  );
}

export default GameStatus;
