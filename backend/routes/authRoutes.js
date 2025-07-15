const express = require('express');
const router = express.Router();
const { sendOTPToEmail, verifyOTP } = require('../controllers/authController');

router.post('/send-otp', sendOTPToEmail);
router.post('/verify-otp', verifyOTP);

module.exports = router;
