const express = require('express')

const router = express.Router()

let {Joke} = require('../models/Jokes')

// Ruta para obtener TODAS las bromas
router.get('/api/jokes', async (req, res) => {
  const jokes = await Joke.find()
  res.json(jokes)
})
// Ruta para obtener TODAS las bromas
router.get('/api/jokes/random', async (req, res) => {
  const jokes = await Joke.find()
  const count = jokes.length 
  var random = Math.floor(Math.random() * count)
  const joke = await Joke.findOne().skip(random)
  res.json(joke)
})

// Ruta para obtener 1 broma en particular
router.get('/api/jokes/:id', async (req, res) => {
  // obtengo el ID desde el parámetro de la ruta
  const id = req.params.id
  try {
    const joke = await Joke.findOne({_id: id})
    return res.json(joke)
  }
  catch (error) {
    console.log(error)
    return res.json({error}, 404)
  }
})

// Ruta para agregar bromas
router.post('/api/jokes/new', async (req, res) => {
  const new_joke = await Joke.create({
    ...req.body
  })
  res.json(new_joke)
})

// Ruta para modifijoke un broma
router.put('/api/jokes/update/:id', async (req, res) => {
  // recuperamos el ID de las parámetros de las ruta
  const id = req.params.id
  const joke = await Joke.updateOne(
    {_id: id},
    { ...req.body }
  )
  return res.json({})
})

// Ruta para eliminar bromas
router.delete('/api/jokes/delete/:id', async (req, res) => {
  const id = req.params.id
  await Joke.findOneAndRemove({_id: id})
  res.json({})
})

module.exports = router