const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require('body-parser');

const UserModel = require('./models/User')
const AdminModel = require('./models/Admin')
const StudentDataModel = require('./models/StudentData');

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());


// Database and collection name
const dbName = 'certificate';
const collectionName = 'studentdatas';


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/certificate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Route to save student data
app.post('/saveData', async (req, res) => {
    try {
        const newStudentData = new StudentDataModel(req.body);
        await newStudentData.save();
        res.status(200).json({ message: 'Data saved successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Route to get students
app.get('/getStudents', (req, res) => {
    StudentDataModel.find()
    .then(students => res.json(students))
    .catch(err => res.json(err))

})


// admin login
app.post("/login", (req, res) => {
    const { email, pass } = req.body;
    AdminModel.findOne({ email: email })
        .then(admin => {
            if (admin) {
                if (admin.pass === pass) {
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
app.post("/login", (req, res) => {
    const { email, pass } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.pass === pass) {
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
