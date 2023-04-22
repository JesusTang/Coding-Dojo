const { Field } = require("../models/field.model");

module.exports.getAllFields = async (req, res) => {
  const fields = await Field.find().sort({ name: "asc" });
  res.json(fields);
};
module.exports.getOneField = async (req, res) => {
  const id = req.params.id;
  const field = await Field.findOne({ _id: id });
  res.json(field);
};
module.exports.getFieldIdByCoords = async (req, res) => {
  const { lat, lng } = req.params;
  const field = await Field.findOne({
    coordinates: { lat: parseFloat(lat), lng: parseFloat(lng) }
  });
  console.log(lat, lng);
  res.json(field._id);
};
module.exports.createField = async (req, res) => {
  try {
    const new_field = await Field.create({
      ...req.body
    });
    res.json(new_field);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports.deleteField = async (req, res) => {
  const id = req.params.id;
  await Field.findOneAndRemove({ _id: id });
  res.json(id + "has been deleted");
};
module.exports.editField = async (req, res) => {
  const { id } = req.params;
  try {
    const field = await Field.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { runValidators: true }
    );
    res.json(field);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports.getFilteredFields = async (req, res) => {
  const { sport, category, open_field, open_entrance } = req.params;

  var sportQuery =
    sport !== "any"
      ? sport
      : ["Soccer", "Fulbito", "BasketBall", "Tennis", "Baseball", "Fronton"];
  var categoryQuery =
    category !== "any" ? category : ["Mixed", "Casual", "Competitive"];
  var open_fieldQuery = open_field !== "any" ? open_field : [true, false];
  var open_entranceQuery =
    open_entrance !== "any" ? open_entrance : [true, false];

  // console.log(sportQuery, categoryQuery, open_fieldQuery, open_entranceQuery);

  var query = Field.find({
    sport: sportQuery,
    category: categoryQuery,
    open_field: open_fieldQuery,
    open_entrance: open_entranceQuery
  });
  try {
    const fields = await query;
    res.json(fields);
  } catch (error) {
    res.status(400).json(error);
  }
};
