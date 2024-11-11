const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://usmanmasud260:Q7rZXaT222DkpSbr@cluster0.8a9er.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("Server running");
    });
  })
  .catch(() => {
    console.log("database connection failed");
  });
