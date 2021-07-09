require("dotenv").config();

const { GMAIL_PASSWORD } = process.env;
const email = process.env.EMAIL;

const config = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: GMAIL_PASSWORD,
  },
};

module.exports = config;
