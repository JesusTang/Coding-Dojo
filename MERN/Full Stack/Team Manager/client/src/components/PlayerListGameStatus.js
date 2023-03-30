// import PlayerDelete from "./PlayerDelete";
import PlayersActivityButtons from "./PlayersActivityButtons";

function PlayerList(props) {
  const { players } = props;
  const btn_style = (index) => {
    if (index % 2 === 0) {
      const style = "list-group-item-light";
      return style;
    } else {
      const style = "list-group-item-secondary";
      return style;
    }
  };
  // console.log(players);
  return (
    <div>
      <table className="table table-bordered table-striped table-hover ">
        <thead>
          <tr className="bg-dark bg-opacity-25 text-center">
            <th>Player Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            return (
              <tr key={index} className={btn_style(index)}>
                <td>{player.name}</td>
                <td>
                  <PlayersActivityButtons player={player} id={player._id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <table className="table table-striped table-hover ">
        <thead>
          <tr className="bg-dark bg-opacity-25">
            <th style={{ color: "white" }}>Player Name</th>
            <th style={{ color: "white" }}>Preferred Position</th>
            <th style={{ color: "white" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map((player, index) => {
            return (
              <tr key={index} className={btn_style(index)}>
                <td>{player.name}</td>
                <td>{player.preferred_position}</td>
                <td>
                  <PlayerDelete id={player._id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}

export default PlayerList;
