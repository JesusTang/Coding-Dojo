const express = require('express')
const Usuario = require('../models/Usuario')
const router = express.Router()

router.get("/api/users/new", (req, res) => {
    res.json(new Usuario.Usuario());
  });

  module.exports = router