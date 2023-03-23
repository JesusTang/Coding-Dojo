import axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthorDelete(props) {
  const navegar = useNavigate();
  const { id } = props;
  const deleteAuthor = () => {
    axios.delete(`http://localhost:8000/api/authors/${id}/delete`);
    navegar("/");
  };

  return (
    <button
      className="btn"
      style={{ backgroundColor: "#bba6ac" }}
      onClick={deleteAuthor}
    >
      Delete
    </button>
  );
}

export default AuthorDelete;
