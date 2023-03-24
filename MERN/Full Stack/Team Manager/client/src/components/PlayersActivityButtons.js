import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlayersActivityButtons(props) {
  const { id, player } = props;
  const { game_number } = useParams();
  const [player1, setPlayer] = useState("");
  const game = `game${game_number}_state`;
  const current_game_state = `player.game${game_number}_state`;
  const [activity, setActivity] = useState(eval(current_game_state));
  const default_style = "btn btn-light border ms-3 me-3";
  var style1 = "";
  var style2 = "";
  var style3 = "";
  if (activity === "Playing") {
    style1 = "btn btn-success border ms-3 me-3";
  } else {
    style1 = default_style;
  }
  if (activity === "Not Playing") {
    style2 = "btn btn-danger border ms-3 me-3";
  } else {
    style2 = default_style;
  }
  if (activity === "Undecided") {
    style3 = "btn btn-warning border ms-3 me-3";
  } else {
    style3 = default_style;
  }
  // useEffect(() => {
  //   setPlayer(player);
  //   console.log(player1);
  // }, [player, player1]);
  // var style = (value) => {
  //   // console.log(value);
  //   console.log(activity);
  //   if (activity === value) {
  //     if (value === "Playing") {
  //       return "btn btn-success border ms-3 me-3";
  //     }
  //     if (value === "Not Playing") {
  //       return "btn btn-danger border ms-3 me-3";
  //     }
  //     if (value === "Undecided") {
  //       return "btn btn-warning border ms-3 me-3";
  //     }
  //   } else {
  //     return "btn btn-light border ms-3 me-3";
  //   }
  // };
  // console.log(activity);
  const updateActivity = async (ev) => {
    const input = { [game]: ev.target.value };
    await axios.put(`http://localhost:8000/api/players/${id}/edit`, input);
    console.log(eval(current_game_state));
  };

  return (
    <div className="text-center">
      <button
        className={style1}
        onClick={(ev) => {
          setActivity(ev.target.value);
          updateActivity(ev);
        }}
        value={"Playing"}
      >
        Playing
      </button>
      <button
        className={style2}
        onClick={(ev) => {
          setActivity(ev.target.value);
          updateActivity(ev);
        }}
        value={"Not Playing"}
      >
        Not Playing
      </button>
      <button
        className={style3}
        onClick={(ev) => {
          setActivity(ev.target.value);
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
