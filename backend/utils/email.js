const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

module.exports = async function sendOTP(email, otp) {
  try {
    const mailOptions = {
      from: `"Campus Affinity" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your OTP Code for Login',
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px;">
          <p>Hi,</p>
          <p>Your OTP code is:</p>
          <h2 style="background: #f0f0f0; padding: 10px; display: inline-block;">${otp}</h2>
          <p>This code will expire in 10 minutes.</p>
          <br/>
          <p>Thanks,<br/>Campus Affinity Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ OTP ${otp} sent to ${email}`);
  } catch (error) {
    console.error('❌ Failed to send OTP email:', error);
    throw new Error('Failed to send OTP email');
  }
};
