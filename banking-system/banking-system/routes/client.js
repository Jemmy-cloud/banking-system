const clientRouter = require("express").Router()
const studentController = require("../controllers/student")
const middleWares = require("../util/middlewares")

clientRouter.get("", clientController.selectclient)
clientRouter.post("", middleWares.checkbankerAuth, clientController.addclient)
clientRouter.post("/login", clientController.login)
clientRouter.put("", middleWares.checkbankerAuth, )
clientRouter.delete("", )



module.exports = clientRouter