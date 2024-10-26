import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Profile = () => {
    const [biography, setBiography] = useState(''); 

    const handleBiographyChange = (value) => {
        setBiography(value);
    };

    return (
        <div className="flex flex-col w-9/12">
            
            <div className="grid grid-cols-2 gap-6 mb-6 pt-4">
                {/* Organization Type */}
                <div className="flex flex-col ">
                    <label className="text-sm font-semibold text-slate-400">Organization Type</label>
                    <select className="border border-gray-300 rounded-md text-sm font-medium text-slate-400 py-2 px-3 mt-1">
                        <option value="" disabled selected>Select...</option>
                        <option value="private">Private</option>
                        <option value="government">Government</option>
                        <option value="nonprofit">Nonprofit</option>
                        <option value="startup">Startup</option>
                    </select>
                </div>

                {/* Industry Type */}
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Industry Type</label>
                    <select 
                        className="border text-slate-400 border-gray-300 rounded-md py-2 px-3 mt-1 focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="" disabled selected>Select...</option>
                        <option value="tech">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="education">Education</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
                    </select>
                </div>
            </div>

            {/* Team Size & Year of Establishment */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Team Size</label>
                    <select className="border text-slate-400 rounded-md text-sm font-medium py-2 px-3 mt-1">
                        <option value="" disabled selected>Select...</option>
                        <option>1-10 employees</option>
                        <option>11-50 employees</option>
                        <option>51-200 employees</option>
                        <option>201-500 employees</option>
                        <option>500+ employees</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Year of Establishment</label>
                    <input 
                        type="number" 
                        min="1900"
                        max={new Date().getFullYear()}
                        className="border border-gray-300 rounded-md py-2 px-3 mt-1 text-slate-400"
                        placeholder="Enter Year"
                    />
                </div>
            </div>

            {/* Company Website Link */}
            <div className="flex flex-col mb-6">
                <label className="text-sm font-semibold text-slate-400">Company Website Link</label>
                <input 
                    type="url" 
                    placeholder="https://example.com" 
                    className="border border-gray-300 rounded-md py-2 px-3 mt-1 text-slate-400"
                />
            </div>

            {/* Biography */}
            <div className="flex flex-col mb-6">
                <label className="text-sm font-semibold text-slate-400">Company Vision</label>
                <ReactQuill 
                    theme="snow" 
                    value={biography} 
                    placeholder="Write your biography here..."
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
