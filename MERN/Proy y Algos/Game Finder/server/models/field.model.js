const mg = require("../config/mongoose.config");
const schema = new mg.Schema(
  {
    name: String,
    sport: {
      type: String,
      required: [true, "Please select a sport"]
    },
    coordinates: {
      type: Object,
      lat: { type: Number, min: -90, max: 90 },
      lng: { type: Number, min: -180, max: 180 },
      required: [true, "Invalid coordinates"]
    },
    category: String,
    open_field: Boolean,
    open_entrance: Boolean
  },
  { timestamps: true }
);

const Field = mg.model("Field", schema);
module.exports = { Field };
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
