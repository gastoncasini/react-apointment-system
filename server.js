const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const appointments = require("./routes/api/appointments");
const app = express();

//body parser middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// DB config
const db = require("./config/keys").mongoURI;

// connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo DB connected ..."))
  .catch((err) => console.log(err));

// use routes
app.use("/api/appointments", appointments);

const port = 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
