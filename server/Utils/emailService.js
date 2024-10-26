// emailService.js
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Use your email provider's SMTP server
    port: 587,
    secure: false, // Set to true if using 465 port
    auth: {
        user: process.env.MAIL_USER, // Your email address
        pass: process.env.MAIL_PASS, // Your email password
    },
});

const sendOtpEmail = async (email, otp) => {
    console.log("first")
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('OTP email sent successfully');
    } catch (error) {
        console.error('Error sending OTP email:', error);
    }
};

module.exports = { sendOtpEmail };
