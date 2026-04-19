const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ["income", "expense"],
        required: true
    }
}, {
    timestamps: true
})

categorySchema.index({ user: 1, name: 1 }, { unique: true })

const categoryModel = mongoose.model("categories", categorySchema)

module.exports = categoryModel