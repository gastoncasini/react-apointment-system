// TODO LEARN ABOUT route @acess Public or Private
const express = require("express");
const router = express.Router();

// Appointment Model
const Appointment = require("../../models/Appointment");

// @route GET /api/appointments
// @desc get all appointments
router.get("/", (req, res) => {
  Appointment.find().then((appo) => res.json(appo));
});

// @route POST /api/appointments
// @desc add an appointment
router.post("/", (req, res) => {
  const NewAppointment = new Appointment({
    contactInfo: {
      nombre: req.body.contactInfo.nombre,
      apellido: req.body.contactInfo.apellido,
      telefono: req.body.contactInfo.telefono,
      email: req.body.contactInfo.email
    },
    date: req.body.date,
    time: req.body.time
  });
  NewAppointment.save()
    .then(() => res.status(200).json({ success: true }))
    .catch(() => res.status(404).json({ success: false, error: err }));
});

// @route DELETE /api/appointments/:id
// @desc add an appointment
router.delete("/:id", (req, res) => {
  Appointment.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route UPDATE /api/appointments/:id
// @ modifies an appointment

router.put("/:id", (req, res) => {
  Appointment.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res
      .json({ success: true })
      .catch((err) => res.status(404).json({ success: false }))
  );
});

module.exports = router;
