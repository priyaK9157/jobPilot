import React, { useState } from "react";
import { signin } from "../services/operaions/Auth"; 
import { useNavigate } from "react-router-dom";
import ceate from "../img/ceate.png";
import { IoBagRemoveOutline } from "react-icons/io5";
import { Toaster, toast } from 'react-hot-toast'; 
import { BeatLoader } from "react-spinners"; 

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await signin(formData); 
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      toast.success("Sign in successful!"); 
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message  || "Sign in failed");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto p-4">
    
      <div className="md:w-6/12 w-full p-6 bg-white rounded-lg shadow-lg relative">
        <div className="flex items-center justify-start mb-6">
          <IoBagRemoveOutline className="text-2xl text-blue-500" />
          <p className="text-2xl font-bold text-slate-700 ml-2">Jobpilot</p>
        </div>
        <h2 className="text-3xl font-semibold pb-4">Sign In</h2>
        <p className="text-sm text-slate-500 pb-6">
          Don't have an account?{" "}
          <a href="/create-account" className="text-blue-500 font-semibold">
            Create an account
          </a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none"
          />
          <p
            className="text-sm text-blue-500 font-semibold py-2 cursor-pointer"
            onClick={() => navigate("/forget-password")}
          >
            Forgot Password?
          </p>
          <button
            type="submit"
            className={`w-full py-3 ${loading ? 'bg-gray-500' : 'bg-blue-500'} text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-200`}
            disabled={loading} 
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <BeatLoader color="#3498db" loading={loading} size={15} /> 
          </div>
        )}
      </div>

      <div className="hidden md:block md:w-6/12 h-full">
        <img src={ceate} alt="Office" className="object-cover w-full h-full rounded-lg" />
      </div>

      <Toaster />
    </div>
  );
};

export default SignIn;
