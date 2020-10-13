const router = require('express').Router();
const { appointmentDataValidator } = require('../helpers/inputValidator');
const { bookAppointment } = require('../controllers/appointment');

router.post('/appointment/book',  appointmentDataValidator, bookAppointment);

module.exports = router;