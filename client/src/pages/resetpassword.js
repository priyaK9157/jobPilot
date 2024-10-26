// src/components/ResetPassword.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reset } from "../services/operaions/Auth";
import { useSelector } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast'; 

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const email = useSelector((state) => state.user.email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match"); 
            return;
        }
        try {
            const response = await reset(password, confirmPassword, email);
            toast.success(response.data.message); 
            navigate("/");
        } catch (err) {
            toast.error(err.response?.data.message || 'An error occurred. Please try again.'); 
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 w-[40%]">
                <h2 className="text-2xl font-semibold text-center mb-6">Reset Password</h2>
                <p className='text-slate-400 font-semibold text-center text-sm mb-4'>You can now write new password and confirm password to reset your password</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="password"
                            value={password}
                            placeholder='New Password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            value={confirmPassword}
                            placeholder='Confirm Password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
            <Toaster /> 
        </div>
    );
};

export default ResetPassword;
