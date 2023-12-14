const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const phoneRouter = require("./phones.routes");
router.use("/phones", phoneRouter);

module.exports = router;
