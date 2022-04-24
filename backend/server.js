const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

//gets port number from .env
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server started in port: ${port}`.bgGreen);
});
