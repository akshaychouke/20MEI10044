const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/index.js");
//middlewares
app.use(cors());
app.use(express.json());

//route
app.use("/companies",router);
//server connection
app.listen(8000, () => {
  console.log("Server Started");
});
