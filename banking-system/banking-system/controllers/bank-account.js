const Bank_account = require("../models/Bank_account")
const joi = require("joi")
exports.selectBank_account = (request, response) => {
    const knex = request.app.locals.knex

    knex("Bank_account")
        .select(['id', 'name', 'syllabus'])
        .then(Bank_account => {
            response.status(200).json(Bank_account)
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({
                status: "error",
                msg: "500 internal server error"
            })
        })


}
exports.addBank_account = (request, response) => {
    const knex = request.app.locals.knex

    const name = request.body.name
    const syllabus = request.body.syllabus

    if (!name || !syllabus) {
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request"
        })
    }
    const Bank_account = new Bank_account(name, '0', syllabus)

    const Bank_accountSchema = joi.object({
        id: joi.number().min(0).max(50).required(),
        name: joi.string().not().empty().normalize().min(3).max(20).pattern(/[a-z A-Z]{3,20}/).required(),
        syllabus: joi.string().not().empty().normalize().min(3).max(100).pattern(/[a-z A-Z]{3,100}/).required(),

    })

    const joiErrors = Bank_accountSchema.validate(Bank_account)

    if (joiErrors.error) {
        console.log(joiErrors.error.details);
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request"
        })
    }

    knex("Bank_account")
        .insert({
            name: Bank_account.name,
            syllabus: Bank_account.syllabus,
        })
        .then(data => {
            return response.status(201).json({
                status: "ok",
                msg: "created"
            })

        })
        .catch(error => {
            console.log(error);
            return response.status(400).json({
                status: "error",
                msg: "500 internal server error"
            })
        })
}


exports.updateBank_account = (request, response) => {
    const knex = request.app.locals.knex

}
exports.deleteBank_account = (request, response) => {
    const knex = request.app.locals.knex

}
exports.restoreBank_account = (request, response) => {
    const knex = request.app.locals.knex

}


