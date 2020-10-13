const nodemailer = require('nodemailer');
const { ADMIN_EMAIL, ADMIN_PASSWORD } = require('../config');

async function sendMail(toEmailId, emailSubject, content, htmlContent ) {
    console.log(ADMIN_EMAIL, ADMIN_PASSWORD);
    let transporter = nodemailer.createTransport({
      service:'gmail',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: ADMIN_EMAIL, // generated ethereal user
        pass: ADMIN_PASSWORD, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Ydikam" <${ADMIN_EMAIL}>`, // sender address
      to: toEmailId, // list of receivers
      subject: emailSubject, // Subject line
      text: content, // plain text body
      html: htmlContent // html body
    });
  
    console.log("Message sent: %s", info.messageId);
}

module.exports = sendMail;