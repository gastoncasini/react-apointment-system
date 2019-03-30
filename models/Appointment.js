const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const appointmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    hour: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

module.exports = Appointment = mongoose.model('appointment', appointmentSchema);
