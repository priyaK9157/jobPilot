import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { generateOTP, verifyOTP } from "../services/operaions/Auth";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast'; 

const OTPPage = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const email = useSelector((state) => state.user.email); 
  const user = useSelector((state) => state.user);
  const { fullName, username, password, userType, termsAccepted } = user;

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };


  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyOTP(email, otp, fullName, username, password, userType, termsAccepted);
      if (response?.data?.success) {
        toast.success("OTP verified successfully"); 
        navigate("/signin");
      } else {
        toast.error("OTP verification failed. Please try again."); 
      }
    } catch (error) {
      toast.error("An error occurred during OTP verification."); 
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    try {
      const response = await generateOTP(email);
      if (response.status === 200) {
        toast.success('OTP has been resent successfully to your email.'); 
      } else {
        toast.error('Failed to resend OTP. Please try again later.'); 
      }
    } catch (error) {
      toast.error('Error occurred while resending OTP.'); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 sm:p-7 max-w-[40%]">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 text-center">Email Verification</h1>
          <p className="mt-2 text-center text-base text-slate-400 font-semibold">We have sent an email verification to {email} to verify your email address and activate your account</p> 
        </div>

        <div className="mt-5">
          <form onSubmit={handleVerifyOtp}>
            <div className="grid gap-y-4">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    id="otp"
                    placeholder="Verification Code"
                    name="otp"
                    value={otp}
                    onChange={handleOTPChange}
                    className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-lg focus:outline-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
              >
                Verify My Account
              </button>
            </div>
          </form>

          <div className="flex justify-center">
            <p className="mt-4 text-base text-slate-400 font-semibold">Didn't receive any code!</p>
            <span
              onClick={handleResend}
              className="text-blue-500 font-semibold mt-4 ml-2 cursor-pointer"
            >
              Resend
            </span>
          </div>
        </div>
      </div>
      <Toaster /> 
    </div>
  );
};

export default OTPPage;
