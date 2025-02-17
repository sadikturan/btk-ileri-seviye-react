const express = require("express");

const { getAll, get, add, replace, remove } = require("../data/products");
const { isRequiredCheck, isValidImage } = require("../util/validation");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await getAll();
    res.json(products);
    // throw new ServerError("Server hatası oluştu", "Api Hatası");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await get(req.params.id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isRequiredCheck(data.title)) {
    errors.title = "Title is required";
  }

  if (!isRequiredCheck(data.description)) {
    errors.description = "Description is required";
  }

  if (!isRequiredCheck(data.image)) {
    errors.image = "Image is required";
  }

  if (!isValidImage(data.image)) {
    errors.image = "Image extension is wrong.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(403).json({
      message: "Adding the product failed with validation errors.",
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: "Product saved.", course: data });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isRequiredCheck(data.title)) {
    errors.title = "Title is required";
  }

  if (!isRequiredCheck(data.description)) {
    errors.description = "Description is required";
  }

  if (!isRequiredCheck(data.image)) {
    errors.image = "Image is required";
  }

  if (!isValidImage(data.image)) {
    errors.image = "Image extension is wrong.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(403).json({
      message: "Updating the product failed with validation errors.",
      errors,
    });
  }

  try {
    await replace(req.params.id, data);
    res.json({ message: "Product updated.", course: data });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await remove(req.params.id);
    res.json({ message: "Product deleted." });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
