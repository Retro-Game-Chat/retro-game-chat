const express = require("express");
const router = express.Router();
const checkJwt = require("../util/checkJwt");

/**
 * hello world
 */
router.get("/hello-world", function (req, res) {
  res.json({ message: "hello world from express" });
});

/**
 * update user position
 */
router.post("/user/position", checkJwt, function (req, res) {
  console.log(req.body);

  res.status(204).send();
});

module.exports = router;
