import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import PlayerList from "../components/PlayerList";

function GameStatus(props) {
  const { game_number } = useParams();
  const [players, setPlayers] = useState([]);
  const [fields, setFields] = useState([]);
  // GET ALL PLAYERS AND THEIR STATES FOR EVERY GAME
  //CHANGE IMPORTS IN APP.JS
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => setPlayers(res.data))
      .then(() => {
        setFields([
          { field_name: "Player Name", value: "player.name" },
          { field_name: "Actions", value: "players_activity" }
        ]);
      });
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
        <PlayerList players={players} fields={fields} />
      </div>
    </div>
  );
}

export default GameStatus;

// React components will only re-render if the state or props are updated. If you try to navigate to the page you are currently on, and there isn't a change in state or props in that component, the component will not re-render/refresh. If you update the state/props of the component, or force the page to refresh, it will refresh. And unfortunately, react-router-dom will not refresh the page for you if you are navigating to the current page. –
