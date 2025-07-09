const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String, // optional for OTP-based login
  role: { type: String, enum: ['student', 'admin', 'shopkeeper'], default: 'student' },
  otp: String,
  otpExpiry: Date,
});

module.exports = mongoose.model('User', userSchema);