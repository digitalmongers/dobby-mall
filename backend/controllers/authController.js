<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const OTPModel = require('../models/OTPModel');
const User = require('../models/User');
const sendOTP = require('../utils/email');

// 🔹 Send OTP to Email
=======
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const sendOTP = require('../utils/sendOTP');

// exports.sendOtp = async (req, res) => {
//   const { email } = req.body;
//   if (!email) return res.status(400).json({ message: 'Email is required' });

//   const otp = Math.floor(100000 + Math.random() * 900000).toString();
//   const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

//   let user = await User.findOne({ email });
//   if (!user) user = new User({ email });

//   user.otp = otp;
//   user.otpExpiry = otpExpiry;
//   await user.save();

//   await sendOTP(email, otp); // Stub - log or send email/SMS

//   res.status(200).json({ message: 'OTP sent to email' });
// };

// exports.verifyOtp = async (req, res) => {
//   const { email, otp } = req.body;
//   const user = await User.findOne({ email });

//   if (!user || user.otp !== otp || user.otpExpiry < new Date()) {
//     return res.status(400).json({ message: 'Invalid or expired OTP' });
//   }

//   user.otp = null;
//   user.otpExpiry = null;
//   await user.save();

//   const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
//     expiresIn: '7d',
//   });

//   res.status(200).json({ token, user });
// };




const sendOTP = require('../utils/sendOTP');
const OTPModel = require('../models/OTPModel'); // model to store OTPs
const User = require('../models/User'); // your User model

// Generate and send OTP
>>>>>>> 4e7c9df (Add-Role-based-authentication)
exports.sendOTPToEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: 'Email is required' });

  try {
<<<<<<< HEAD
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

=======
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP in DB (overwrite if exists)
>>>>>>> 4e7c9df (Add-Role-based-authentication)
    await OTPModel.findOneAndUpdate(
      { email },
      { otp, createdAt: Date.now() },
      { upsert: true, new: true }
    );

<<<<<<< HEAD
    await sendOTP(email, otp); // ⬅️ utility to send email via nodemailer
=======
    // Send OTP via Email
    await sendOTP(email, otp);
>>>>>>> 4e7c9df (Add-Role-based-authentication)

    return res.status(200).json({ message: 'OTP sent to email successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to send OTP' });
  }
};

<<<<<<< HEAD
// 🔹 Verify OTP and Login/Register
=======
// Verify OTP and Login/Register User
>>>>>>> 4e7c9df (Add-Role-based-authentication)
exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) return res.status(400).json({ message: 'Email and OTP are required' });

  try {
    const record = await OTPModel.findOne({ email });

    if (!record || record.otp !== otp) {
      return res.status(401).json({ message: 'Invalid or expired OTP' });
    }

<<<<<<< HEAD
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
=======
    // OTP is valid: log in or register
    let user = await User.findOne({ email });

    if (!user) {
      // New user - register
      user = await User.create({ email, role: 'student' }); // default role is student
    }

    // Optional: Remove OTP after verification
    await OTPModel.deleteOne({ email });

    return res.status(200).json({ message: 'Logged in successfully', user });
>>>>>>> 4e7c9df (Add-Role-based-authentication)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'OTP verification failed' });
  }
};
