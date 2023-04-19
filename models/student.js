const mongoose = require("mongoose")
const studentSchema = mongoose.Schema({
    Apple_Name: String,
    Apple_Price: Number,
    Apple_Weight: String
})
module.exports = mongoose.model("student",studentSchema)
