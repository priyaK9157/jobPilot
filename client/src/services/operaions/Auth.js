import axios from "axios";
import { authRoute, jobRoute } from "../Api";

export const getUserByEmail = async(data) => {
    try{

        const response = await axios.post(authRoute.getUserByEmail, data);
        if(response){
            return response;
        }
    }catch(error){
        console.error("error", error);
    }
}

export const createacc = async(data) => {
    console.log("data", data)
    try{
        const response = await axios.post(authRoute.createacc, data);
        console.log("res", response)
        if(response){
            return response;
        }
    }catch(error){
        console.error("Error: ", error);
    }
}

export const update = async (data, token) => {
    console.log("first", data);

    try {
        const response = await axios.put(authRoute.updateaccount, data, {
            headers: {
                Authorization: `Bearer ${token}`, 
                "Content-Type": "application/json" 
            }
        });

        if (response) {
            return response.data; 
        }
    } catch (error) {
        console.error("Error updating account settings:", error);
        throw error; 
    }
};

export const forget = async(email) => {
  

    try{
        console.log("forget email", email)
        const response = await axios.post(authRoute.forgetpassword, email);
        console.log("response", response);
        if(response){
            return response;
        }
    }catch(error){
        console.error("error", error);
    }
}

export const signin = async(data) => {
    try{
        const response = await axios.post(authRoute.signin, data);
        console.log(response);
        if(response){
            return response;
        }
    }catch(error){
        console.error("Error: ", error);
    }
}

export const  generateOTP = async(email) => {
    console.log("hello")
    try{
        const response = await axios.post(authRoute.generateotp, {Email: email})
        console.log("response",response)
        
        return response;
    }catch(error){
        console.error("Error:", error);
    }
}

export const  verifyOTP = async(email, user_Otp, fullName, username,password, userType, termsAccepted) => {

    console.log("hello verify",email, user_Otp, fullName, username, password,userType, termsAccepted )
    
    try{
        const response = await axios.post(authRoute.verifyotp, {email: email, otp: user_Otp, fullName, username,password, userType, termsAccepted})
        console.log("response", response)
    
        return response;
    }catch(error){
        console.error("error", error)
    }
}

export const reset = async(password, confirmpassword, email) => {
    console.log("first", password, confirmpassword, email);

    try{
        const response = await axios.post(authRoute.resetpassword,{ password, confirmpassword, email});

        if(response){
            return response;
        }
    }catch(error){
        console.error("error", error)
    }
}