const express = require("express");
const router = express.Router();

// Routes

router.get("/", (req, res, next) => {
  const locals = {
    title: "Home",
  };
  res.render("index", locals);
});

module.exports = router;
