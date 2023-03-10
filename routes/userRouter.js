const { userController } = require("../controller/userController")
const express = require("express")
const route = express.Router()

route.get("/", userController.getAll);
route.post("/", userController.add);
route.post("/mail", userController.sendMail);

module.exports = route