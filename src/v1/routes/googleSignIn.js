const express = require("express");
const passport = require("passport");
const router = express.Router();
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
module.exports = router;
