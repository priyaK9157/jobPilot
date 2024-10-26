const express = require("express");
const User = require("../models/user");  
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailerSender  = require("../Utils/MailSender")
const Otp =require("../models/otp.js")
const otpTemplate=require("../Template/MailVerification.js")

const createAccount = async (req, res) => {
    try {
        const { fullName, username, email, password, confirmPassword, userType, termsAccepted } = req.body;


        if (!fullName || !username || !email || !password || !confirmPassword || !userType || !termsAccepted) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields and accept the terms"
            });
        }

     
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match"
            });
        }

  
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please login"
            });
        }

   
        const generatedOtp = Math.floor(1000 + Math.random() * 9000);
        
   
        const otpDocument = new Otp({
            Email: email,
            otp: generatedOtp,
            createdAt: Date.now() 
        });
        await otpDocument.save();

        await nodemailerSender(email, "Email Verification Code", otpTemplate(generatedOtp));




        // Send response indicating that OTP was sent
        return res.status(201).json({
            success: true,
            message: "OTP sent to email. Please verify your OTP to complete registration.",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Cannot create account. Please try again later",
            error: error.message
        });
    }
};








module.exports = { createAccount };
