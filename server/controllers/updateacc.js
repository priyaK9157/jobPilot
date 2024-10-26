const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const updateAccount = async (req, res) => {
    console.log("hii");

    try {
        // Check if token is provided in the authorization header
        const token = req.headers.authorization?.split(" ")[1]; // Extract token from the header

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authorization token is required.",
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure JWT_SECRET is set in your environment variables
        const userId = decoded.userId; // Extract userId from the token

        console.log("userId", userId);
        
        const { username, email, currentPassword, newPassword } = req.body;
        console.log("all", username, email, currentPassword, newPassword);

        // Validate incoming data
        if (!username || !email || !currentPassword) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields (username, email, currentPassword)",
            });
        }

        // Find the user in the database
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Check if the email or username is already taken by another user
        const existingEmailUser = await User.findOne({ email, _id: { $ne: userId } });
        const existingUsernameUser = await User.findOne({ username, _id: { $ne: userId } });

        if (existingEmailUser) {
            return res.status(400).json({
                success: false,
                message: "Email is already in use by another account.",
            });
        }

        if (existingUsernameUser) {
            return res.status(400).json({
                success: false,
                message: "Username is already taken by another account.",
            });
        }

        // Verify the current password
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Current password is incorrect.",
            });
        }

        // Update user details
        user.username = username;
        user.email = email;

        // Update password if new password is provided
        if (newPassword) {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
        }

        // Save updated user details
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Account updated successfully",
        });
    } catch (error) {
        console.error("Error updating account:", error); // Log the error for debugging
        return res.status(500).json({
            success: false,
            message: "Error updating account. Please try again later.",
            error: error.message,
        });
    }
};

module.exports = { updateAccount };
