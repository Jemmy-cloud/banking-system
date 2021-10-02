const bank_accountRouter = require("express").Router()
const middlewares = require("../util/middlewares")
const courseController = require("../controllers/courses")

bank_accountRouter.get("", bank_accountController.selectbank_account)
bank_accountRouter.post("", bank_accountController.addbank_account)
bank_accountRouter.put("", middlewares.checkbanker)
bank_accountRouter.delete("", middlewares.checkbankerAuth)
bank_accountRouter.patch("", middlewares.checkbankerAuth)


module.exports = bank_accountRouter