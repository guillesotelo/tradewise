const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "appmailsenderinfo@gmail.com", // generated ethereal user
      pass: "cascara123", // generated ethereal password
    },
  });

transporter.verify().then(() => {
    console.log("Mailing ready!")
})

module.exports = transporter;