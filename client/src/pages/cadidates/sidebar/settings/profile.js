import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Profile = () => {
    const [biography, setBiography] = useState(''); // Fixed spelling from "setBiogrphy" to "setBiography"

    const handleBiographyChange = (value) => {
        setBiography(value);
    };

    return (
        <div className="flex flex-col w-9/12">
            
            <div className="grid grid-cols-2 gap-6 mb-6 pt-4">
                {/* Nationality */}
                <div className="flex flex-col ">
                    <label className="text-sm font-semibold text-slate-400">Nationality</label>
                    <select className="border border-gray-300 rounded-md text-sm font-medium text-slate-400 py-2 px-3 mt-1">
                        <option value="" disabled selected>Select...</option>
                        <option value="american">American</option>
                        <option value="british">British</option>
                        <option value="canadian">Canadian</option>
                        <option value="indian">Indian</option>
                        <option value="australian">Australian</option>
                        <option value="german">German</option>
                        <option value="french">French</option>
                        <option value="chinese">Chinese</option>
                        <option value="japanese">Japanese</option>
                        <option value="brazilian">Brazilian</option>
                        <option value="south_african">South African</option>
                        <option value="nigerian">Nigerian</option>
                        <option value="mexican">Mexican</option>
                    </select>
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Date of Birth</label>
                    <input 
                        type="date" 
                        id="dob" 
                        name="dob" 
                        className="border text-slate-400 border-gray-300 rounded-md py-2 px-3 mt-1 focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>

            {/* Gender & Marital Status */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Gender</label>
                    <select className="border text-slate-400 rounded-md text-sm font-medium text-gray-600 py-2 px-3 mt-1">
                        <option value="" disabled selected>Select...</option>
                        <option>Female</option>
                        <option>Male</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Marital Status</label>
                    <select className="border border-gray-300 rounded-md text-sm font-medium text-slate-400 py-2 px-3 mt-1">
                        <option value="" disabled selected>Select...</option>
                        <option>Single</option>
                        <option>Married</option>
                    </select>
                </div>
            </div>

            {/* Education & Experience */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Education</label>
                    <select className="border border-gray-300 rounded-md text-sm font-medium text-slate-400 py-2 px-3 mt-1">
                        <option value="" disabled selected>Select...</option>
                        <option>10th</option>
                        <option>12th</option>
                        <option>Bachelor</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Experience</label>
                    <select className="border border-gray-300 rounded-md text-sm font-medium text-slate-400 py-2 px-3 mt-1">
                        <option value="" disabled selected>Select...</option>
                        <option>0-1 years</option>
                        <option>2-3 years</option>
                    </select>
                </div>
            </div>

            {/* Biography */}
            <div className="flex flex-col mb-6">
                <label className="text-sm font-semibold text-slate-400">Biography</label>
                <ReactQuill 
                    theme="snow" 
                    value={biography} 
                    placeholder='Write your biography here and let employers know eho you are...'
                    onChange={handleBiographyChange} 
                    className="mt-2 bg-white rounded-md text-slate-400"
                    style={{ height: '200px' }}
                />
            </div>

            <button className="bg-blue-600 text-white mt-10 py-2 px-6 w-40 rounded-md hover:bg-blue-700 transition-all">
                Save Profile
            </button>
        </div>
    );
};

export default Profile;
