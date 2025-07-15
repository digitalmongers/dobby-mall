const jwt = require('jsonwebtoken');
const OTPModel = require('../models/OTPModel');
const User = require('../models/User');
const sendOTP = require('../utils/email');

// 🔹 Send OTP to Email
exports.sendOTPToEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: 'Email is required' });

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await OTPModel.findOneAndUpdate(
      { email },
      { otp, createdAt: Date.now() },
      { upsert: true, new: true }
    );

    await sendOTP(email, otp); // ⬅️ utility to send email via nodemailer

    return res.status(200).json({ message: 'OTP sent to email successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to send OTP' });
  }
};

// 🔹 Verify OTP and Login/Register
exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) return res.status(400).json({ message: 'Email and OTP are required' });

  try {
    const record = await OTPModel.findOne({ email });

    if (!record || record.otp !== otp) {
      return res.status(401).json({ message: 'Invalid or expired OTP' });
    }

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, role: 'student' });
    }

    await OTPModel.deleteOne({ email });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'OTP verification failed' });
  }
};
