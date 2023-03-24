import { Link } from "react-router-dom";

function SubLinks() {
  return (
    <h2>
      <Link className="me-2" to={"/players/list"}>
        List
      </Link>
      |
      <Link className="ms-2" to={"/players/addplayer"}>
        Add a player
      </Link>
    </h2>
  );
}

export default SubLinks;
