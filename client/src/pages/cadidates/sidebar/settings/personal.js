import React, { useState } from "react";
import drop from "../../../../img/drop.png"; // Ensure the path to your drop image is correct

const Personal = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
        }
    };

    const handleSaveChanges = () => {
        // Handle save changes logic here
        console.log("Changes saved:", { file, /* other form data */ });
    };

    return (
        <div className="w-9/12">
            <p className="text-lg font-semibold pt-4">Basic Information</p>
            <div className="flex gap-4">
                
                <div className="flex flex-col">
                    <label className="text-sm text-slate-600 font-semibold pb-2">Profile Picture</label>
                   
                    <label 
                        htmlFor="file-input" 
                        className="cursor-pointer"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <img 
                            src={drop} 
                            alt="Upload your profile" 
                            className="h-48 w-48 object-cover border-2 border-dashed border-slate-400 rounded-lg hover:border-blue-500" 
                        />
                    </label>

                  
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden" 
                        id="file-input"
                    />

                  
                    {file && (
                        <div className="mt-2 text-sm text-slate-600">
                            Selected File: {file.name}
                        </div>
                    )}
                </div>

             
                <div className="flex flex-col flex-grow">
                 
                    <div className="flex gap-4 mb-4">
                        <div className="flex flex-col ">
                            <label className="text-sm text-slate-600 font-semibold pb-2">Full Name</label>
                            <input className="border border-gray-300 px-6 py-2" placeholder="Enter your full name" />
                        </div>

                        <div className="flex flex-col ">
                            <label className="text-sm text-slate-600 font-semibold pb-2">Title/Headline</label>
                            <input className="border border-gray-300 px-6 py-2" placeholder="Enter your title/headline" />
                        </div>
                    </div>

                 
                    <div className="flex gap-4 mb-4">
                        <div className="flex flex-col ">
                            <label className="text-sm text-slate-600 font-semibold pb-2">Experience</label>
                            <input className="border border-gray-300 px-6 py-2" placeholder="Enter your experience" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm text-slate-600 font-semibold pb-2">Education</label>
                            <input className="border border-gray-300 px-6 py-2" placeholder="Enter your education" />
                        </div>
                    </div>

                 
                    <div className="flex flex-col mb-4">
                        <label className="text-sm text-slate-600 font-semibold pb-2">Personal Website</label>
                        <input 
                            className="border border-gray-300 px-6 py-2" 
                            placeholder="Enter your personal website URL" 
                        />
                    </div>

                
                    <button 
                        onClick={handleSaveChanges} 
                        className="mt-4 bg-blue-600 text-white px-4 py-2 max-w-40 rounded hover:bg-blue-700"
                    >
                        Save Changes
                    </button>

                    
                </div>
            </div>
        </div>
    );
};

export default Personal;
