const passport = require("passport");

module.exports = class UserService {
  static async createUser() {
    try {
      await passport.authenticate("localSignUp", {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        failureFlash: true,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
