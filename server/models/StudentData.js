const mongoose = require('mongoose')

const StudentDataSchema = new mongoose.Schema({
    student_id: Number,
    student_name: String,
    course_field: String,
    start_date: Date,
    end_date: Date,
    enrollment_status: String
});

const StudentDataModel = mongoose.model("Studentdatas", StudentDataSchema)
module.exports = StudentDataModel