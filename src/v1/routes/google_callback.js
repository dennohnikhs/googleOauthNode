const express = require("express");
const passport = require("passport");
const router = express.Router();
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/success",
    failureRedirect: "/auth/failure",
  })
);
module.exports = router;
