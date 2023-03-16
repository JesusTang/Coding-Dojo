const mg = require('mongoose')

mg.connect(
  'mongodb://127.0.0.1:27017/jokes',
  {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log("Ya estamos conectados a la Base de datos"))
.catch(error => console.log("Error de Mongoose", error))

module.exports = mg