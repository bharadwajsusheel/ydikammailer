const Booking = require('../models/booking');
const sendMail = require('../helpers/sendMail');

exports.bookAppointment = async function(req, res) {
    const response = {};
    const { email, name } = req.body;
    const prev = await Booking.findOne({email});
    const prevDate = new Date(prev.createdAt).valueOf();
    const now = new Date().valueOf();
    const oneDay = 24*60*60*1000;
   /* if(now-prevDate<oneDay) {
        response.success=false;
        response.err = 'Active booking already exists';
        return res.status(400).json(response);
    }*/
    const newBooking = new Booking(req.body);
    await newBooking.save();
    response.success=true;
    response.msg = 'Booking confirmed. We will revert back within 2 business days';  
    await sendMail(email, 'no-reply: Ydikam Astrology Consultation Booking Confirmation', 
`Hi ${name},
Thank you for booking an appointment with us. We'll revert back to you within 2 business days.

Regards
Ydikam Team
`);
    return res.status(200).json(response);
}

