const router = require("express").Router();
const phoneJson = require("../data/phones.json");

// GET "/api/phones" => To get all phones data
router.get("/", async (req, res, next) => {
  try {
    res.json(phoneJson);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
