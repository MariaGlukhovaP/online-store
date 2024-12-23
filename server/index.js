const PORT = 9001;

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const headphones = require("./constants/mock");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/registration", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Вы успешно зарегистрировались!",
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Вы успешно авторизовались!",
  });
});

app.get("/products", (req, res) => {
  res.json({ headphones });
});

const start = () => {
  try {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
