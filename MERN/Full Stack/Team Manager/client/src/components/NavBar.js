import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h4>
        <Link className="me-2" to="/players/list">
          Manage Players
        </Link>
        |
        <Link className="ms-2" to="/status/game/1">
          Manage Player Status
        </Link>
      </h4>
    </nav>
  );
}

export default NavBar;
