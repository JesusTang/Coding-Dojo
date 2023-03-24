const mg = require("../config/mongoose.config");

const Player = mg.model(
  "Player",
  mg.Schema(
    {
      name: {
        type: String,
        required: [true, "An player can't be nameless"],
        minlength: [
          2,
          "The player's name must be at least 2 characters in length"
        ]
      },
      preferred_position: {
        type: String,
        required: false
      },
      game1_state: { type: String },
      game2_state: { type: String },
      game3_state: { type: String }
    },
    { timestamps: true }
  )
);
module.exports = {
  Player
};
// {
// "firstName":"john",
// "lastName":"Wick"
// }
