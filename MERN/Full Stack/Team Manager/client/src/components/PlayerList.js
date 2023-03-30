import PlayerDelete from "./PlayerDelete";

function PlayerList(props) {
  const { removeFromDom } = props;
  const row_style = (index) => {
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
            <th>Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map((player, index) => {
            return (
              <tr key={index} className={row_style(index)}>
                <td>{player.name}</td>
                <td>{player.preferred_position}</td>
                <td>
                  <PlayerDelete id={player._id} removeFromDom={removeFromDom} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerList;
