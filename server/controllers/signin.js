const User = require("../models/user");  
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;


        const existingUser = await User.findOne({ email });  

        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User does not exist",
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Please enter valid credentials"
            });
        }

        const token =  jwt.sign(
            { userId: existingUser._id, email: existingUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",  
            response: {
                id: existingUser._id,
                email: existingUser.email,
                domain: existingUser.domain,
                linkedinLink: existingUser.linkedinLink,
                githubLink: existingUser.githubLink,
                location: existingUser.location
            },
            token
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Cannot login. Please try again later",
            error: error.message
        });
    }
};

module.exports = { signin };  
