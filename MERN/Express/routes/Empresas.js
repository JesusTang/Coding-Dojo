const express = require('express')
const Empresa = require('../models/Empresa')
const Usuario = require('../models/Usuario')
const router = express.Router()

const empresa = new Empresa.Empresa()
const user = new Usuario.Usuario()

router.get("/api/companies/new", (req, res) => {
  res.json(new Empresa.Empresa());
});
router.get("/api/user/company", (req, res) => {
  res.json({empresa, user});
});

module.exports = router
