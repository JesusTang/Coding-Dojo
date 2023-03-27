const PlayerController = require("../controllers/player.controller");
const express = require("express");

const router = express.Router();

router.get("/api/players", PlayerController.getAllPlayers);
router.get("/api/players/:id", PlayerController.getOnePlayer);
router.delete("/api/players/:id/delete", PlayerController.deletePlayer);
router.put("/api/players/:id/:game_number/edit", PlayerController.editPlayer);
router.post("/api/players", PlayerController.createPlayer);

module.exports = router;
