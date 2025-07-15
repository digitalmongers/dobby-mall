const express = require('express');
const router = express.Router();

const { sendOTPToEmail, verifyOTP } = require('../controllers/authController');

router.post('/send-otp', sendOTPToEmail);
router.post('/verify-otp', verifyOTP);

const { sendOtp, verifyOtp } = require('../controllers/authController');

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);


module.exports = router;
