const express = require("express");
const {
  BadRequestError,
  NotFoundError,
  UnAuthorizedError,
  ServerError,
  ValidationError,
} = require("../util/errors");

const router = express.Router();

router.get("/bad-request", async (req, res, next) => {
  try {
    throw new BadRequestError("Bad Request Error");
  } catch (ex) {
    next(ex);
  }
});

router.get("/unauthorized", async (req, res, next) => {
  try {
    throw new UnAuthorizedError("UnAuthorized Error");
  } catch (ex) {
    next(ex);
  }
});

router.get("/not-found", async (req, res, next) => {
  try {
    throw new NotFoundError("Not Found Error");
  } catch (ex) {
    next(ex);
  }
});

router.get("/validation-error", async (req, res, next) => {
  try {
    throw new ValidationError("Validation Error", {
      key1: "value 1",
      key2: "value 2",
      key3: "value 3",
    });
  } catch (ex) {
    next(ex);
  }
});

router.get("/server-error", async (req, res, next) => {
  try {
    throw new ServerError("Server Error", "Server Error Details");
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
