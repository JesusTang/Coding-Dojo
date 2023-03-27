const { Player } = require("../models/player.model");

module.exports.getAllPlayers = async (req, res) => {
  const players = await Player.find();
  res.json(players);
};
module.exports.getOnePlayer = async (req, res) => {
  const id = req.params.id;
  const player = await Player.findOne({ _id: id });
  res.json(player);
};
module.exports.createPlayer = async (req, res) => {
  try {
    const new_player = await Player.create({
      ...req.body
    });
    console.log(req.body);
    res.json(new_player);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports.deletePlayer = async (req, res) => {
  const id = req.params.id;
  await Player.findOneAndRemove({ _id: id });
  res.json(id + "has been deleted");
};
module.exports.editPlayer = async (req, res) => {
  const { id, game_number } = req.params;
  try {
    const player = await Player.findOneAndUpdate(
      { _id: id, "activity.game": game_number },
      { ...req.body },
      { runValidators: true }
    );
    console.log(player);
    res.json(player);
  } catch (error) {
    res.status(400).json(error);
  }
};
