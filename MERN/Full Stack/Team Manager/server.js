const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const player_router = require("./server/routes/player.routes");
require("./server/config/mongoose.config");

app.use(player_router);

app.listen(port, () => {
  console.log(`You are now listening at port ${port}`);
});
