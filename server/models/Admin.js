const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    email: String,
    pass: String
})

const AdminModel = mongoose.model("admins", AdminSchema)
module.exports = AdminModel