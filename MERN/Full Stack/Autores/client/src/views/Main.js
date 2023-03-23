import React, { useEffect, useState } from "react";
import AuthorList from "../components/AuthorList";
import axios from "axios";

function Main() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => setAuthors(res.data))
      .catch((err) => console.log("Error: ", err));
  });

  return (
    <div className="container col-6 justify-content-start">
      <hr></hr>
      <AuthorList authors={authors} />
    </div>
  );
}

export default Main;
