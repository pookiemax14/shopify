const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

const PRIVATE_SERVER_LINK = 'https://www.roblox.com/share?code=04893fdc9352354cb1a95bdf0d3e2feb&type=Server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brainrotsteal985@gmail.com',
    pass: 'axtwxmocxljyuptv'
  }
});

app.post('/shopify-hook', async (req, res) => {
  const email = 'bukharovmax69420@gmail.com';

  try {
    await transporter.sendMail({
      from: 'brainrotsteal985@gmail.com',
      to: email,
      subject: 'Your Private Server Link (Test)',
      text: `Thanks for your purchase!\n\nJoin your private Roblox server here:\n${PRIVATE_SERVER_LINK}`
    });

    console.log(`✅ TEMP test email sent to ${email}`);
    res.status(200).send('Test email sent!');
  } catch (err) {
    console.error('❌ Email sending error:', err);
    res.status(500).send('Failed to send email');
  }
});

app.get('/', (req, res) => res.send('Shopify Webhook is live'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
