const UserService = require("../services/user");

module.exports = class UserController {
  static async createUserController(req, res) {
    try {
      const user = await UserService.createUser();
      if (!user) {
        res.status(404).json("user does not exist");
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
};
