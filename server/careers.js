const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    "Data Analyst",
    "Data Scientist",
    "Frontend Developer",
    "Full Stack Developer",
    "AI/ML Engineer"
  ]);
});

module.exports = router;