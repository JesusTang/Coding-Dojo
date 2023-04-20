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
module.exports.createField = async (req, res) => {
  try {
    const new_field = await Field.create({
      ...req.body
    });
    console.log(req.body);
    res.json(new_field);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};
module.exports.deleteField = async (req, res) => {
  const id = req.params.id;
  await Field.findOneAndRemove({ _id: id });
  res.json(id + "has been deleted");
};
module.exports.editField = async (req, res) => {
  const { id, field_number } = req.params;
  try {
    const field = await Field.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { runValidators: true }
    );
    console.log(field);
    res.json(field);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports.getFilteredFields = async (req, res) => {
  const { sport, category, open_field, open_entrance } = req.params;
  const fields = await Field.find({
    sport: sport,
    category: category,
    open_field: open_field,
    open_entrance: open_entrance
  });
  if (!fields) {
    res.status(404).json({ message: "Field not found" });
  } else {
    res.json(fields);
  }
};
