const nodemailer = require("nodemailer");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const nodemailerSender  = require("../Utils/MailSender")
const resetPasswordTemplate = require("../Template/resetpassword")


exports.forget = async (req, res) => {
    
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found with this email." });
        }

   
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;

        await nodemailerSender(email, "Reset Password", resetPasswordTemplate(resetLink));

        return res.status(200).json({ message: "Reset link sent to your email." });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "An error occurred. Please try again." });
    }
};
