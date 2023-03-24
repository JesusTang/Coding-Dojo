import PlayerDelete from "./PlayerDelete";
import PlayersActivityButtons from "./PlayersActivityButtons";

function PlayerList(props) {
  const { fields } = props;
  const btn_style = (index) => {
    if (index % 2 === 0) {
      const style = "list-group-item-light";
      return style;
    } else {
      const style = "list-group-item-secondary";
      return style;
    }
  };

  return (
    <div>
      <table className="table table-bordered table-striped table-hover ">
        <thead>
          <tr className="bg-dark bg-opacity-25 text-center">
            {fields.map((field, index) => {
              return (
                <th key={index} style={{ color: "white" }}>
                  {field.field_name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.players.map((player, index) => {
            return (
              <tr key={index} className={btn_style(index)}>
                {fields.map((field, index) => {
                  if (field.value === "delete_btn") {
                    return (
                      <td key={index}>
                        <PlayerDelete id={player._id} />
                      </td>
                    );
                  }
                  if (field.value === "players_activity") {
                    return (
                      <td key={index}>
                        <PlayersActivityButtons
                          player={player}
                          id={player._id}
                        />
                      </td>
                    );
                  }
                  return <td key={index}>{eval(field.value)}</td>;
                })}
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
