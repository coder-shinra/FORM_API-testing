const express = require("express");
const app = express();

const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

//Middle ware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Public/contactform.html"); //Line to connect the html file without script line
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ligertechnovision@gmail.com",
      pass: process.env.Password,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "ligertechnovision@gmail.com",
    subject: `Message from ${req.body.email}: ${req.body.message}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email Sent: " + info.response);
      res.send("Success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at Port ${PORT}`);
});
