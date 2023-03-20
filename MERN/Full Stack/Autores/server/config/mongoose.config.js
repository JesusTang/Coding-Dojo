const mg = require ('mongoose');

mg.connect(
    'mongodb://127.0.0.1:27017/authorsdb',
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log("Database connection established"))
    .catch(err => console.log("There was an error", err))

module.exports = mg