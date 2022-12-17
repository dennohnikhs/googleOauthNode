const express = require("express");
const router = express.Router();
router.get("/auth/failure", (req, res) => {
  res.send("something went wrong...");
});
module.exports = router;
