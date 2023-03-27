import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlayersActivityButtons(props) {
  const { id } = props;
  const { game_number } = useParams();
  const [state, setState] = useState("");

  const default_style = "btn btn-light border ms-3 me-3";
  var style1 = "";
  var style2 = "";
  var style3 = "";
  if (state === "Playing") {
    style1 = "btn btn-success border ms-3 me-3";
  } else {
    style1 = default_style;
  }

  if (state === "Not Playing") {
    style2 = "btn btn-danger border ms-3 me-3";
  } else {
    style2 = default_style;
  }

  if (state === "Undecided") {
    style3 = "btn btn-warning border ms-3 me-3";
  } else {
    style3 = default_style;
  }
  useEffect(() => {
    axios.get(`http://localhost:8000/api/players/${id}`).then((res) => {
      setState(res.data.activity.find((x) => x.game == game_number).status);
    });
  }, [id, game_number]);
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
        className={style1}
        onClick={(ev) => {
          updateActivity(ev);
        }}
        value={"Playing"}
      >
        Playing
      </button>
      <button
        className={style2}
        onClick={(ev) => {
          updateActivity(ev);
        }}
        value={"Not Playing"}
      >
        Not Playing
      </button>
      <button
        className={style3}
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
