const bankerRouter = require("express").Router()
const bankerController = require("../controllers/ta")


bankerRouter.get("/", bankerController.selectclient)
bankerRouter.get("/", bankerController.deleteclient)
bankerRouter.get("/", bankerController.updateclient)
bankerRouter.post("/", bankerController.addclient)
bankerRouter.get("/", bankerController.restoreclient)
bankerRouter.post("/login", bankerController.login)



module.exports = bankerRouter