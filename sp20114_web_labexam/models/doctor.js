const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
});

exports.doctorSchema = mongoose.model("Doctor", doctorSchema);
