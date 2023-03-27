import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlayerDelete(props) {
  const navegar = useNavigate();
  const { id, removeFromDom } = props;
  const deletePlayer = () => {
    axios
      .get(`http://localhost:8000/api/players/${id}`)
      .then((response) => {
        return response.data.name;
      })
      .then((name) => {
        if (window.confirm(`Are you sure you want to remove ${name}?`)) {
          axios.delete(`http://localhost:8000/api/players/${id}/delete`);
          navegar("/");
          removeFromDom(id);
        }
      });
  };

  return (
    <div className="text-center">
      <button
        className="btn"
        style={{ backgroundColor: "red", color: "white" }}
        onClick={deletePlayer}
      >
        Delete
      </button>
    </div>
  );
}

export default PlayerDelete;
