const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/config/mongoose.config");
const field_router = require("./server/routes/field.routes");

app.use(field_router);

app.listen(port, () => {
  console.log(`You are now listening at port ${port}`);
});
