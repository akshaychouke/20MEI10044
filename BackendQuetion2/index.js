const express = require("express");
const cors = require("cors");
const router = require("./route/index.js");
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//route
app.use("/numbers",router);

//server connection
app.listen(8000, () => {
  console.log("Server Started");
});
