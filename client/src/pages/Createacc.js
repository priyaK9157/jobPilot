import React, { useState } from "react";
import { createacc } from "../services/operaions/Auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import ceate from "../img/ceate.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import { IoBagRemoveOutline } from "react-icons/io5";
import { BeatLoader } from "react-spinners"; 
import { Toaster, toast } from 'react-hot-toast'; 

const Createacc = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "employer",
    termsAccepted: false,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleUserTypeClick = (type) => {
    setFormData({
      ...formData,
      userType: type,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdata", formData);

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    if (!formData.termsAccepted) {
      setMessage("You must accept the terms and conditions");
      return;
    }

    setLoading(true); 

    try {
      const response = await createacc(formData);
      console.log("response", response);
      setMessage(response.data.message);

      dispatch(setUser(formData));

      setFormData({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: "candidate",
        termsAccepted: false,
      });

      navigate("/emailverification");
      toast.success("Account creation successful")
    } catch (error) {
      toast.error(error.response?.data?.message || "SignUp failed");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-10">
        <form onSubmit={handleSubmit} className="py-16 w-full md:w-1/2">
          <div className="-mt-16">
            <p className="text-lg font-semibold inline-flex items-center gap-2">
              <IoBagRemoveOutline className="text-xl text-blue-500 font-bold" />
              Jobpilot
            </p>
          </div>
          <p className="text-2xl font-semibold pb-3 pt-8">Create account.</p>
          <p className="text-slate-400 text-sm pb-4 font-semibold">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 font-semibold">
              Log In
            </a>
          </p>
          <div className="bg-gray-200 p-2 mb-4">
            <p className="text-center uppercase text-slate-400 text-xs font-semibold pb-4">
              Create account as a
            </p>
            <div className="flex justify-around">
              <button
                type="button"
                onClick={() => handleUserTypeClick("candidate")}
                className="px-10 py-1 text-sm text-slate-500 font-semibold rounded inline-flex items-center gap-2"
                style={{
                  backgroundColor: formData.userType === "candidate" ? "#172554" : "",
                  color: formData.userType === "candidate" ? "#fff" : "",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <IoPersonCircleOutline
                  className={`text-lg ${formData.userType === "candidate" ? "text-white" : "text-slate-700"}`}
                />
                Candidate
              </button>
              <button
                type="button"
                onClick={() => handleUserTypeClick("employer")}
                className="px-10 py-1 text-sm text-slate-500 font-semibold rounded inline-flex items-center gap-2"
                style={{
                  backgroundColor: formData.userType === "employer" ? "#172554" : "",
                  color: formData.userType === "employer" ? "#fff" : "",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <FaBuilding
                  className={`text-lg ${formData.userType === "employer" ? "text-white" : "text-slate-700"}`}
                />
                Employer
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-4 mb-4">
            <input
              placeholder="Full name"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="border border-slate-200 focus:outline-none p-2 w-full md:w-1/2"
            />
            <input
              placeholder="Username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
              className="border border-slate-200 focus:outline-none p-2 w-full md:w-1/2"
            />
          </div>

          <div className="mb-4">
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-slate-200 focus:outline-none p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border border-slate-200 focus:outline-none p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Confirm password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="border border-slate-200 focus:outline-none p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              className="mr-2 border border-slate-200 text-lg focus:outline-none"
            />
            <span className="text-slate-400 text-sm">
              I have read and agree to the{" "}
              <span className="text-blue-500 font-semibold">Terms of Service</span>
            </span>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white border-none"
          >
            {loading ? <BeatLoader color="#fff" size={10} /> : "Create Account"} 
          </button>
        </form>

        {message && <p>{message}</p>}

        <img src={ceate} alt="office image" className="h-auto w-full md:w-1/2 object-cover" />
      </div>
    </div>
  );
};

export default Createacc;
