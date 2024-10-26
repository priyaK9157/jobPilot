// src/components/ForgotPassword.js

import React, { useState } from 'react';
import { forget } from "../services/operaions/Auth";
import { useNavigate } from 'react-router-dom';
import { IoBagRemoveOutline } from "react-icons/io5";
import ceate from "../img/ceate.png";
import { toast, Toaster } from 'react-hot-toast'; 

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await forget({ email });
            console.log("response", response);
            toast.success(response.data.message); 
            navigate("/reset-password");
        } catch (err) {
            toast.error(err.response?.data.message || 'An error occurred. Please try again.'); 
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto min-h-screen ">
            <div className="md:w-6/12 p-8 bg-white rounded-lg">
                <div className="flex items-center justify-start mb-6">
                    <IoBagRemoveOutline className="text-2xl text-blue-500" />
                    <p className="text-2xl font-bold text-slate-700 ml-2">Jobpilot</p>
                </div>
                <h2 className="text-3xl font-semibold pb-4">Forgot Password</h2>
                <p className="text-sm text-slate-500 pb-6">
                    Enter your email to receive a password reset link.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        placeholder='Enter your email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border rounded-md focus:outline-none "
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-200"
                    >
                        Reset Password
                    </button>
                </form>

               
            </div>

            <div className="hidden md:block md:w-6/12 h-full">
                <img src={ceate} alt="Office" className="object-cover w-full h-full rounded-lg" />
            </div>
            <Toaster /> 
        </div>
    );
};

export default ForgotPassword;
