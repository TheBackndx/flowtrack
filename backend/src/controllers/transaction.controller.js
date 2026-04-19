const transactionModel = require("../models/transaction.model")

const addTransaction = async (req, res) => {
    try {
        const { type, amount, title, note, category, date } = req.body

        if (!type || !amount || !category || !title) {
            return res.status(400).json({
                message: "All fields are required."
            })
        }

        const transcation = await transactionModel.create({
            user: req.user.id,
            type, amount, title, note, category, date
        })

        res.status(201).json({
            message: "Transaction succesfull",
            transcation
        })
    }
    catch (e) {
        return res.json({
            note : "Transaction unsuccessfull",
            message: e
        })
    }
}

module.exports = { addTransaction }