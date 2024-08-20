const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel = require('./models/User')
const AdminModel = require('./models/Admin')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/certificate");

// admin login
app.post("/login", (req, res) =>{
    const {email, pass} = req.body;
    AdminModel.findOne({email: email})
    .then(admin => {
        if(admin) {
            if(admin.pass === pass){
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record exists")
        }
    })
})

// user login
app.post("/login", (req, res) =>{
    const {email, pass} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.pass === pass){
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record exists")
        }
    })
})

// user register
app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})