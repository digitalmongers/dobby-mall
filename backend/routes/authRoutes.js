const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { sendOTPToEmail, verifyOTP } = require('../controllers/authController');

router.post('/send-otp', sendOTPToEmail);
router.post('/verify-otp', verifyOTP);
=======
const { sendOtp, verifyOtp } = require('../controllers/authController');

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
>>>>>>> 4e7c9df (Add-Role-based-authentication)

module.exports = router;
