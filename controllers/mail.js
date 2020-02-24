const nodemailer = require('nodemailer');


// const Mail = require('../models/mail');

exports.sendMail = (req, res) => {
    console.log("Mail envoyé");
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        service: "gmail",
        auth: {
          user: "virginiebouvarel@gmail.com",
          pass: "47084712"
        }
      });
    var message = {
    from: "virginiebouvarel@gmail.com",
    to: "virginiebouvare@gmail.com",
    subject: "Message title",
    text: "salut toto",
    html: "<p>salut toto html</p>"
    };

    transporter.sendMail(message)
    .then(()=> console.log(req.body))
    .catch(err => console.error(err));


}