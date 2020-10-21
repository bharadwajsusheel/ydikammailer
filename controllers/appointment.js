const Booking = require('../models/booking');
const sendMail = require('../helpers/sendMail');
const { ADMIN_EMAIL } = require('../config');

exports.bookAppointment = async function(req, res) {
    const response = {};
    const { email, name } = req.body;
    /*
    const prev = await Booking.findOne({email});
    const prevDate = new Date(prev.createdAt).valueOf();
    const now = new Date().valueOf();
    const oneDay = 24*60*60*1000;
    */
    /* if(now-prevDate<oneDay) {
         response.success=false;
         response.err = 'Active booking already exists';
         return res.status(400).json(response);
     }*/
    const newBooking = new Booking(req.body);
    await newBooking.save();
    response.success = true;
    response.msg = 'Booking confirmed. We will revert back within 2 business days';
    await sendMail(email, 'no-reply: Ydikam Astrology Consultation Booking Confirmation',
        `Hi ${name},
Thank you for booking an appointment with us. We'll revert back to you within 2 business days.

Regards
Ydikam Team
`);

    await sendMail(ADMIN_EMAIL, 'New Booking received for : ${name}', '',
        `Hi, 

        We have received a new booking on : ${Date}.

        Please find the below details.
                
        <!DOCTYPE html>
        <html>
        <head>
        <style>
        table, th, td {
          border: 1px solid black;
        }
        </style>
        </head>
        <body>
        
        <h1>Booking Details</h1>
        
        <table style="width:400px">
          <tr>
            <th>Contents</th>
            <th>Details</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>${email}</td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td>${mobile}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>${gender}</td>
          </tr>
          <tr>
            <td>Date Of Birth</td>
            <td>${dateOfBirth}</td>
          </tr>
          <tr>
            <td>Time Of Birth</td>
            <td>${timeOfBirth}</td>
          </tr>
          <tr>
            <td>Place Of Birth</td>
            <td>${placeOfBirth}</td>
          </tr>
          <tr>
            <td>Service Booked</td>
            <td>${service}</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>${message}</td>
          </tr>
        </table>
        
        </body>
        </html>
`);
    return res.status(200).json(response);
    console.log(response)
}