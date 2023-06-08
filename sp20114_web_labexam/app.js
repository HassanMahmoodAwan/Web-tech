const express = require("express");
const app = express();
const mongoose = require("mongoose");



const doctorsRoutes = require("./routes/doctors");

const api = "/api";

app.use(`${api}/doctors`, doctorsRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/paper_doctor", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4000, () => {
  console.log("server is running http://localhost:4000");
});
