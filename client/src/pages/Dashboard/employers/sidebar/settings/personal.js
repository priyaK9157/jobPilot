import React, { useState } from "react";
import drop from "../../../../../img/drop.png"

const CompanyProfile = () => {
    const [logo, setLogo] = useState(null);
    const [banner, setBanner] = useState(null);
    const [companyName, setCompanyName] = useState("");
    const [aboutUs, setAboutUs] = useState("");

    const handleFileChange = (event, setFile) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event, setFile) => {
        event.preventDefault();
        event.stopPropagation();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
        }
    };

    const handleSaveChanges = () => {
        // Handle save changes logic here
        console.log("Changes saved:", { logo, banner, companyName, aboutUs });
    };

    return (
        <div className="w-9/12">
            <p className="text-lg font-semibold pt-4">Logo & Banner Image</p>
            <div className="flex gap-4">
                {/* Logo Upload */}
                <div className="flex flex-col">
                    <label className="text-sm text-slate-600 font-semibold pb-2">Upload Logo</label>
                    <label 
                        htmlFor="logo-input" 
                        className="cursor-pointer"
                        onDragOver={handleDragOver}
                        onDrop={(event) => handleDrop(event, setLogo)}
                    >
                        <img 
                            src={drop} 
                            alt="Upload your logo" 
                            className="h-48 w-48 object-cover border-2 border-dashed border-slate-400 rounded-lg hover:border-blue-500" 
                        />
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => handleFileChange(event, setLogo)}
                        className="hidden" 
                        id="logo-input"
                    />
                    {logo && (
                        <div className="mt-2 text-sm text-slate-600">
                            Selected Logo: {logo.name}
                        </div>
                    )}
                </div>

                {/* Banner Upload */}
                <div className="flex flex-col">
                    <label className="text-sm text-slate-600 font-semibold pb-2">Upload Banner Image</label>
                    <label 
                        htmlFor="banner-input" 
                        className="cursor-pointer"
                        onDragOver={handleDragOver}
                        onDrop={(event) => handleDrop(event, setBanner)}
                    >
                        <img 
                            src={drop} 
                            alt="Upload your banner" 
                            className="h-48 w-96 object-cover border-2 border-dashed border-slate-400 rounded-lg hover:border-blue-500" 
                        />
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => handleFileChange(event, setBanner)}
                        className="hidden" 
                        id="banner-input"
                    />
                    {banner && (
                        <div className="mt-2 text-sm text-slate-600">
                            Selected Banner: {banner.name}
                        </div>
                    )}
                </div>
            </div>

            {/* Company Details */}
            <div className="flex flex-col mt-6">
                <label className="text-sm text-slate-600 font-semibold pb-2">Company Name</label>
                <input 
                    className="border border-gray-300 px-6 py-2 mb-4" 
                    placeholder="Enter your company name" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />

                <label className="text-sm text-slate-600 font-semibold pb-2">About Us</label>
                <textarea 
                    className="border border-gray-300 px-6 py-2 mb-4 h-32" 
                    placeholder="Enter your company's description" 
                    value={aboutUs}
                    onChange={(e) => setAboutUs(e.target.value)}
                />
                
                <button 
                    onClick={handleSaveChanges} 
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default CompanyProfile;
