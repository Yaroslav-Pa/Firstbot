const User = require("./models/UserModels"),
  userController = require("./controlers/userControllers.js");

module.exports = function (app) {
  app.get("/user", userController.getListOfUsers);
  app.get("/user/:name", userController.getUsersByName);
  app.post("/user", userController.addUser);
};
