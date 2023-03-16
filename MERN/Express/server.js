const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const Usuarios_router = require('./routes/Usuarios')
const Empresas_router = require('./routes/Empresas')
const Jokes_router = require('./routes/Jokes')

app.use(Usuarios_router)
app.use(Empresas_router)
app.use(Jokes_router)


app.listen( port, () => console.log(`Listening on port: ${port}`) );
