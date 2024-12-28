const PORT = 9001;
const URLDB = "mongodb://localhost:27017";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const Product = require("./models/product");
const { secret } = require("./config");

const app = express();

app.use(cors());
app.use(express.json());

const generateAccessToken = (id) => {
  const payload = {
    id,
  };

  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

app.post("/registration", async (req, res) => {
  console.log(req.body);

  const { login, password, email } = req.body;

  const user = new User({ login, password, email });
  await user.save();

  res.json({
    message: "Вы успешно зарегистрировались!",
  });
});

app.post("/login", async (req, res) => {
  console.log(req.body);

  const { login, password } = req.body;
  const user = await User.findOne({ login });

  const token = generateAccessToken(user._id);

  if (!user) {
    return res.status(400).json({ message: "Пользователь не найден" });
  } else if (user.password !== password) {
    return res.status(400).json({ message: "Неверный логин или пароль" });
  }

  res.json({
    message: "Вы успешно авторизовались!",
    token: token,
  });
});

app.get("/products", async (req, res) => {
  const products = await Product.find();

  res.json({ data: products });
});

app.get("/personal-data", async (req, res) => {
  const token = req.headers.authorization;
  const id = jwt.verify(token, secret).id;

  const user = await User.findById(id);

  if (!user) {
    return res.status(400).json({ message: "Пользователь не найден" });
  }

  res.json({
    data: user,
  });
});

app.put("/update-personal-data", async (req, res) => {
  const token = req.headers.authorization;
  const id = jwt.verify(token, secret).id;

  const user = await User.findById(id);

  if (!user) {
    return res.status(400).json({ message: "Пользователь не найден" });
  }

  const { login, email, password } = req.body;

  await User.updateOne({ _id: id }, { login, email, password });

  await user.save();

  res.json({
    message: "Данные успешно обновлены!",
    data: user,
  });
});

const start = async () => {
  try {
    await mongoose.connect(URLDB, { authSource: "admin" });
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
