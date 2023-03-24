import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Create from "./views/Create";
import GameStatus from "./views/GameStatus";
import Main from "./views/Main";

function GoToMain() {
  const navegar = useNavigate();
  useEffect(() => {
    navegar("/players/list");
  });
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<GoToMain />} />
          <Route path="/players/list" element={<Main />} />
          <Route path="/status/game/:game_number" element={<GameStatus />} />
          <Route path="/players/addplayer" element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
