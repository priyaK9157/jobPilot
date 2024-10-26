const jwt = require("jsonwebtoken");
const User = require("../models/user")

const getUserByEmail = async(req,res) => {
    try{
        const email = req.user.email;

        const response = await User.find({email});

        return res.status(200).json({
            success:true,
            message: "Data fetched successfully",
            data: response
        })
    }catch(error){
        return res.status(500).json({
            succsess:false,
            message: "Error fetching data",
            error: error.message
        })
    }
    
};

module.exports = getUserByEmail