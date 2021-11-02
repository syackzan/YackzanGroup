const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));

  });

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com", // hostname
    service: 'gmail',
    auth: {
        user: 'nodemailer105832@gmail.com',
        pass: 'Theres8!'
    }
});

  // verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post('/send', (req, res) => {
 
  const mail = {
    from: `nodemailer105832@gmail.com`,
    to: `nodemailer105832@gmail.com`,
    subject: `<${req.body.lname}, ${req.body.fname}> Company: ${req.body.company} Inquiry`,
    text: `Message: ${req.body.message} <${req.body.email}>`,
  };

  console.log(mail)

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong.");
    } else {
      res.status(200).send("Email successfully sent to recipient!");
    }
  });

  // res.json({ message: 'Success'});
});

app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
