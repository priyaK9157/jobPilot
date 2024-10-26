const express = require("express");
const router = express.Router();
const { createAccount } = require("../controllers/createacc"); 
const { signin } = require("../controllers/signin");   
const {GetOtp, verifyOtp} = require("../controllers/otp")
const {forget} = require("../controllers/forgetpassword")
const {reset} = require('../controllers/resetpassword')
const getUserByEmail = require("../controllers/user")
const authmiddleware = require("../middleware/authmiddleware")


router.post("/createacc", createAccount);
router.post("/signin", signin);
router.post("/generate",GetOtp);
router.post("/verify", verifyOtp);
router.post("/forget-password",forget);
router.post("/reset-password", reset);
router.post("/user", authmiddleware, getUserByEmail)




module.exports = router;  
