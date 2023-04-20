const FieldController = require("../controllers/field.controller");
const express = require("express");

const router = express.Router();

router.get("/api/fields", FieldController.getAllFields);
router.get("/api/fields/:id", FieldController.getOneField);
router.delete("/api/fields/:id/delete", FieldController.deleteField);
router.put("/api/fields/:id/edit", FieldController.editField);
router.post("/api/fields", FieldController.createField);

module.exports = router;