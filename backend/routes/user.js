const express = require("express");
const router = express.Router();
const passport = require("passport");
const UserCtrl = require("../controllers/user");

router.post(
  "/signup",
  passport.authenticate("localSignUp", {
    successRedirect: "/auth/signup/success",
    failureRedirect: "/auth/signup/failure",
    failureFlash: true,
  })
);

router.post(
  "/login",
  passport.authenticate("localLogin", {
    successRedirect: "/auth/signup/success",
    failureRedirect: "/auth/signup/failure",
    failureFlash: true,
  })
);

router.get("/signup/success", (req, res) => {
  res.status(200).json({
    success: true,
    message: "signup successful",
    authorized: true,
  });
});

router.get("/signup/failure", (req, res) => {
  res.status(401).json({
    error: true,
    message: "failed to signup",
    authorized: false,
  });
});

module.exports = router;
