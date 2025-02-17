const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

var cors = require("cors");

const port = 5000;

const productsRoutes = require("./routes/products");
const cartsRoutes = require("./routes/carts");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");
const errorsRoutes = require("./routes/errors");

const { NotFoundError } = require("./util/errors");

const app = express();

const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/products", productsRoutes);
app.use("/carts", cartsRoutes);
app.use("/users", usersRoutes);
app.use("/orders", ordersRoutes);
app.use("/errors", errorsRoutes);

app.use((req, res, next) => {
  const error = new NotFoundError("Not Found Error");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  const details = error.details;
  const errors = error.errors;

  res.status(status).json({ message, details, errors });
});

app.listen(port, () => {
  console.log(`API http://localhost:${port} üzerinde çalışıyor.`);
});
