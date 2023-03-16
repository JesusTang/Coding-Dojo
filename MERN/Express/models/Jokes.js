const mg = require('./db.js')

const Joke = mg.model('Joke', mg.Schema({
  setup: {
    type: String,
    required: [true, "There must be a setup"],
    minlength: [10, "The setup has to be at least 10 characters long"]
  },
  punchline: {
    type: String,
    required: [true, "There must be a punchline"],
    minlength: [3, "The setup has to be at least 10 characters long"]
  },
}, {timestamps: true}))

module.exports = {
  Joke
}