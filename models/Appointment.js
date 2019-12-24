const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const appointmentSchema = new Schema(
  {
    date: { type: Object, required: true },
    time: { type: String, required: true },

    contactInfo: {
      nombre: { type: String, required: true },
      apellido: { type: String, required: true },
      telefono: { type: String, required: true },
      email: { type: String, required: true }
    }
  },
  { versionKey: false }
);

module.exports = Appointment = mongoose.model("appointment", appointmentSchema);
