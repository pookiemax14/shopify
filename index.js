const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brainrotsteal985@gmail.com',
    pass: 'axtw xmoc xljy uptv',
  },
});

async function sendMail(subject, text, to) {
  const mailOptions = {
    from: 'brainrotsteal985@gmail.com',
    to: to,
    subject: subject,
    text: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

app.get('/', async (req, res) => {
  await sendMail(
    '✅ Shopify Webhook Test Email',
    'If you received this, email sending works!',
    'bukharovmax69420@gmail.com'
  );
  res.send('✅ Test email sent to bukharovmax69420@gmail.com');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
