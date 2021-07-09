const nodemailer = require("nodemailer");
const config = require("./nodemailer-gmail-config");

const transporter = nodemailer.createTransport(config);

const sendGmailMail = async (toEmail, subject = " ", text = " ") => {
  const myEmail = process.env.EMAIL;

  const email = {
    to: toEmail,
    from: myEmail,
    subject: subject,
    text: text,
  };

  try {
    const result = await transporter.sendMail(email);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = sendGmailMail;
