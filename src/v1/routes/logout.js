const express = require("express");
const router = express.Router();
router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  req.session.destroy();
  res.send("Goodbye!");
});
module.exports = router;
