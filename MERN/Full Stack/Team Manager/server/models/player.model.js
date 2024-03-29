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
      activity: [
        { game: Number, status: String },
        { game: Number, status: String },
        { game: Number, status: String }
      ]
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
// {
//   "name":"john",
//    "preferred_position":"Wick",
//   "activity": [
//           { "game": 1, "status": "Undecided" },
//           { "game": 2, "status": "Undecided" },
//           { "game": 3, "status": "Undecided" }
//         ]
//   }
