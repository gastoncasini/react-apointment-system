// TODO LEARN ABOUT route @acess Public or Private
const express = require('express');
const router = express.Router();

// Appointment Model
const Appointment = require('../../models/Appointment');

// @route GET /api/appointments
// @desc get all appointments
router.get('/', (req, res) => {
  Appointment.find().then(appo => res.json(appo));
});

// @route POST /api/appointments
// @desc add an appointment
router.post('/', (req, res) => {
  const NewAppointment = new Appointment({
    name: req.body.name,
    day: req.body.day,
    hour: req.body.hour,
  });
  NewAppointment.save().then(item => res.json(item));
});

// @route DELETE /api/appointments/:id
// @desc add an appointment
router.delete('/:id', (req, res) => {
  Appointment.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route UPDATE /api/appointments/:id
// @ modifies an appointment

router.put('/:id', (req, res) => {
  Appointment.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res
      .json({ success: true })
      .catch(err => res.status(404).json({ success: false })),
  );
});

module.exports = router;
