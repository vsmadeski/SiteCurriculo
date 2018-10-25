let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_DEVMAIL,
      pass: process.env.USER_DEVMAIL_PASS
    }
});

let mailOptions = {
    from: process.env.USER_DEVMAIL,
    to: process.env.USER_MAINMAIL,
    subject: 'Mensagem do seu site',
    text: ''
  };

let mailer = {
    transporter: transporter,
    mailOptions: mailOptions
};

module.exports = mailer;