const express = require("express");
const isLoggedIn = require("../../middleware/google_auth_middleware");
const router = express.Router();
router.get("/auth/success", isLoggedIn, (req, res) => {
  res.send("Welcome " + req.user.email);
});
module.exports = router;
