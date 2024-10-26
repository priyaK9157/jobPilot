import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAccountSettings } from "../../../../../redux/slices/authSlice"; 
import { update } from "../../../../../services/operaions/Auth";

const AccSetting = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState(""); 
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();

    const token = localStorage.getItem("token");

    const handleSave = async () => {

        console.log("gii")
        if (newPassword !== confirmPassword) {
            alert("New Password and Confirm Password do not match!");
            return;
        }

       
        const updateData = { username, email, currentPassword, newPassword };

        try {

            console.log("first")
            
            await dispatch(updateAccountSettings(updateData));

            const response = await update(updateData, token);
            console.log("response", response);



            alert("Account settings saved successfully!");

            setUsername('');
            setEmail('');
            setConfirmPassword('');
            setCurrentPassword('');
            setNewPassword('')
        } catch (error) {
            console.error("Error saving account settings:", error);
            alert("Failed to save account settings. Please try again.");
        }
    };

    return (
        <div className="max-w-2xl p-6 bg-white rounded-md shadow-md mt-10">
            <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

            {/* Username */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            {/* Email */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Current Password */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                <input
                    type="password"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
            </div>

            {/* New Password */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                    type="password"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>

            {/* Confirm New Password */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                    type="password"
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            {/* Save Button */}
            <button
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-all"
                onClick={handleSave}
            >
                Save Settings
            </button>
        </div>
    );
};

export default AccSetting;
