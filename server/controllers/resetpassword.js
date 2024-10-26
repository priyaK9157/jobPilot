const User = require("../models/user")
const bcrypt = require("bcryptjs");


exports.reset = async(req, res) => {
    const {password, confirmpassword, email} = req.body;

    console.log("password, confirmpassword, email", password, confirmpassword, email)

    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                success: false,
                mesage: "User does not exist"
            })
        }

        if(password != confirmpassword){
            return res.status(400).json({
                success:false,
                message:"Password and Confirm password do not match"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user.password = hashedPassword;

        await user.save;

        return res.status(200).json({
            success: true,
            message: "Password reset successfull"
        })
    }catch(error){
        console.error(error)
        res.status(500).json({
            success:false,
            message: "An error occurred. Please try again."
        })
    } 

}

