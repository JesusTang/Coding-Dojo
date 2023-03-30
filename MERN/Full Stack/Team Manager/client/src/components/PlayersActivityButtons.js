import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlayersActivityButtons(props) {
  const { id } = props;
  const { game_number } = useParams();
  const [state, setState] = useState("");
  const gameID = parseInt(game_number);
  const default_style = "btn btn-light border ms-3 me-3";

  useEffect(() => {
    axios.get(`http://localhost:8000/api/players/${id}`).then((res) => {
      setState(res.data.activity.find((x) => x.game === gameID).status);
    });
  }, [id, gameID]);
  const updateActivity = async (ev) => {
    const input = {
      $set: {
        "activity.$.status": ev.target.value
      }
    };
    await axios.put(
      `http://localhost:8000/api/players/${id}/${game_number}/edit`,
      input
    );
    setState(ev.target.value);
  };

  return (
    <div className="text-center">
      <button
        className={
          state === "Playing"
            ? "btn btn-success border ms-3 me-3"
            : default_style
        }
        onClick={(ev) => {
          updateActivity(ev);
        }}
        value={"Playing"}
      >
        Playing
      </button>
      <button
        className={
          state === "Not Playing"
            ? "btn btn-danger border ms-3 me-3"
            : default_style
        }
        onClick={(ev) => {
          updateActivity(ev);
        }}
        value={"Not Playing"}
      >
        Not Playing
      </button>
      <button
        className={
          state === "Undecided"
            ? "btn btn-warning border ms-3 me-3"
            : default_style
        }
        onClick={(ev) => {
          updateActivity(ev);
        }}
        value={"Undecided"}
      >
        Undecided
      </button>
    </div>
  );
}

export default PlayersActivityButtons;
