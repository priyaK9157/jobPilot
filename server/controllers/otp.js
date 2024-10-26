const User = require("../models/user");
const Otp =require("../models/otp.js")
const otpTemplate=require("../Template/MailVerification.js")
const nodemailerSender=require("../Utils/MailSender.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.GetOtp = async (req, res) => {
  console.log("byeeeeeeeeeee")
    try {
      const { Email } = req.body;
      if (!Email) {
        return res.status(400).json({
          success: false,
          message: "Email is required",
        });
      }
  
      // Check if the profile with the provided email exists
    
      const userProfile = await User.findOne({ Email });
      if (userProfile) {
        return res.status(200).json({
          success: false,
          message: "Profile found",
        });
      }
  
      // Generate a random OTP (4 digits for simplicity)
      const generatedOtp = Math.floor(1000 + Math.random() * 9000);
        
      // Store the OTP in the database (you may need a separate OTP model)
      const otpDocument = new Otp({
        Email: Email,
        otp: generatedOtp,
      });
      
      await otpDocument.save();
      // sending mail in email
      const sendingMail=await nodemailerSender(Email,"Email Verification Code",otpTemplate(generatedOtp))
      console.log("send",sendingMail)
      return res.status(200).json({
        success: true,
        message: "OTP generated successfully",
        otp: generatedOtp,
      });
    } catch (error) {
      console.error("Error in GetOtp controller:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
  
exports.verifyOtp = async (req, res) => {
    try {
        const { email, otp, fullName, username, password, userType, termsAccepted } = req.body;

        

        console.log("hi guys", email, otp, fullName, username, password, userType, termsAccepted);


        // Find the OTP entry in the database
        const otpEntry = await Otp.findOne({ Email: email }).sort({ createdAt: -1 }).exec(); // Get the latest OTP
        console.log("entry",otpEntry)
        if (!otpEntry || parseInt(otp) !== otpEntry.otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP or OTP expired",
            });
        }


        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            fullName,
            username,
            email,
            password: hashedPassword,
            userType,
            termsAccepted
        });
        const savedUser = await newUser.save();

        console.log("savedUser",savedUser)

        // Generate JWT token
        const token = jwt.sign(
            { userId: savedUser._id, email: savedUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Clean up OTP entry and session
        await Otp.deleteOne({ Email: email }); // Remove OTP record

        // Send response with the token and user details
        return res.status(200).json({
            success: true,
            message: "Email verified and account created successfully",
            token,
            user: {
                id: savedUser._id,
                fullName: savedUser.fullName,
                username: savedUser.username,
                email: savedUser.email,
                userType: savedUser.userType
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "OTP verification failed. Please try again.",
            error: error.message
        });
    }
};
