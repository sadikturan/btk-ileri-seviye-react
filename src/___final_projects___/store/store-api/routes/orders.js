const express = require("express");
const jwt = require("jsonwebtoken");

const { getAll, get, add, payment } = require("../data/orders");
const { getCart } = require("../data/carts");

const router = express.Router();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = { token, username: decoded.username };
    next();
  });
};

router.get("/", verifyToken, async (req, res, next) => {
  try {
    const orders = await getAll(req.user.username);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", verifyToken, async (req, res, next) => {
  try {
    const order = await get(req.params.id, req.user.username);
    res.json(order);
  } catch (error) {
    next(error);
  }
});

router.post("/", verifyToken, async (req, res, next) => {
  const order = {
    ...req.body,
    username: req.user.username,
    customerId: req.cookies.customerId,
  };

  try {
    const id = await add(order);
    res.status(201).json({ message: "Order saved.", orderId: id });
    // await payment(order);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
