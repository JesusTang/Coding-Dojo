const mg = require("../config/mongoose.config");

const Field = mg.model(
  "Field",
  mg.Schema(
    {
      name: String,
      sport: {
        type: String,
        required: [true, "Can't be a sportless field"]
      },
      lat: {
        type: Number,
        required: [true, "Must have lat"]
      },
      lng: {
        type: Number,
        required: [true, "Must have lng"]
      },
      category: String,
      open_field: Boolean,
      open_entrance: Boolean,
      juegos: { type: Array }
    },
    { timestamps: true }
  )
);
module.exports = {
  Field
};
// {
// "firstName":"john",
// "lastName":"Wick"
// }
// {
//   "name":"john",
//    "crew_position":"Wick",
//   "activity": [
//           { "field": 1, "status": "Undecided" },
//           { "field": 2, "status": "Undecided" },
//           { "field": 3, "status": "Undecided" }
//         ]
//   }