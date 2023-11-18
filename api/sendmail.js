

const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/sendmail/first', async (req, res) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, // Use TLS
  
    auth: {
      type: 'OAuth2',
      user: "aftina32@gmail.com",
      clientId: "388996058052-d52rh6osgh6nuugn52bat0ppj405nbec.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "1//04HwqGzCx4l9RCgYIARAAGAQSNwF-L9IrgT9DTCCsMu-2QXIIYWU8mEJkyrMwMkXa_km35rv2Q05pSVo7eYa38cOHTfFVstKVl_U"
    }
  });
  
  let { email, subject, message, number,length,width,height,actualWeight,rate,totalRate,totalActualWeight,numBoxes,volumetricWeight} = req.body;


  const mailConfigurations = {
    from: 'daakgaadi@gmail.com',
    to: email, // Set the recipient's email address
    cc: 'daakgaadi@gmail.com', // Add the admin's email as a cc recipient
    subject: subject,
    text: message,
    html: `
    <h1>Order Details</h1>
    <p><strong>Your Email:</strong> ${email}</p>
    <p><strong>Your Numbers:</strong> ${number}</p>
    <p><strong>Length:</strong> ${length}</p>
    <p><strong>Width:</strong> ${width}</p>
    <p><strong>Height:</strong> ${height}</p>
    <p><strong>Actual Weight:</strong> ${actualWeight}</p>
    <p><strong>Volumetric Weight:</strong> ${volumetricWeight}</p>
    <p><strong>Rate:</strong> ${rate}</p>
    <p><strong>Total Actual Weight:</strong> ${totalActualWeight}</p>
    <p><strong>Total Rate:</strong> ${totalRate}</p>
    <p><strong>Number of Boxes:</strong> ${numBoxes}</p>
  `
  };


  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' }); // Handle the error and send an error response
    } else {
      console.log('Email Sent Successfully');
      return res.status(200).json('Email Sent Successfully');
      console.log(info);
    }
  });

 });

module.exports = router;






