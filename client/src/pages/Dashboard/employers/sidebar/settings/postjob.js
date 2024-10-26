import { useState } from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios'; 
import 'react-quill/dist/quill.snow.css';
import {createJob} from "../../../../../services/operaions/jobs"

const PostJob = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [tags, setTags] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const [salaryType, setSalaryType] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [jobType, setJobType] = useState('');
    const [vacancies, setVacancies] = useState('');
    const [expires, setExpires] = useState('');
    const [jobLevel, setJobLevel] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [jobDescription, setJobDescription] = useState(''); // Job description state
    const [selectedBenefits, setSelectedBenefits] = useState([]);
    const [jobRequirements, setJobRequirements] = useState(''); // New state for requirements
    const [jobDesirableSkills, setJobDesirableSkills] = useState(''); // New state for desirable skills

    const jobBenefitsOptions = [
        'Health Insurance',
        'Paid Time Off',
        'Flexible Hours',
        'Remote Work',
        'Retirement Plan',
        'Stock Options',
        'Childcare Assistance',
        'Wellness Programs',
        'Gym Membership',
        'Tuition Reimbursement',
        'Parental Leave',
        'Relocation Assistance',
        'Volunteer Time Off',
        'Employee Discounts',
        'Professional Development',
        'Transportation Reimbursement',
        'Bonuses and Incentives',
        'Life Insurance',
        'Disability Insurance',
        'Team Events'
    ];

    const handleBenefitToggle = (benefit) => {
        if (selectedBenefits.includes(benefit)) {
            setSelectedBenefits(selectedBenefits.filter(item => item !== benefit));
        } else {
            setSelectedBenefits([...selectedBenefits, benefit]);
        }
    };

    const handleSubmit = async () => {
        const jobData = {
            designation: jobTitle,
            tags: tags.split(',').map(tag => tag.trim()),
            type: jobRole,  // Ensure 'type' is populated
            salary: `${minSalary} - ${maxSalary} (${salaryType})`, // Send salary as a string
            education,
            experienceLevel: experience, // Ensure 'experienceLevel' is populated
            company: 'YourCompanyName',  // Add company field
            vacancies,
            location: `${city}, ${country}`, // Send location as a string
            expires,
            description: jobDescription,  // Ensure description is passed
            requirements: jobRequirements,  // Include requirements field
            desirable: jobDesirableSkills,  // Include desirable skills field
            jobBenefits: selectedBenefits,  // Ensure job benefits is passed
        };
    
        try {
            console.log("first", jobData)
            const response = await createJob(jobData);
            console.log('Job created successfully:', response.data);
            // Reset form if needed
        } catch (error) {
            console.error('Error creating job:', error.response?.data || error.message);
        }
    };

    return (
        <div className="flex flex-col w-8/12 ml-32 p-6 mt-10">
            <h2 className="text-2xl font-semibold mb-4">Post a Job</h2>

            {/* Job Title & Tags */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Job Title</label>
                    <input 
                        type="text" 
                        value={jobTitle} 
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Enter Job Title" 
                        className="border border-gray-300 rounded-md py-2 px-3 mt-1 text-slate-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Tags</label>
                    <input 
                        type="text" 
                        value={tags} 
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Enter Tags (comma separated)" 
                        className="border border-gray-300 rounded-md py-2 px-3 mt-1 text-slate-400"
                    />
                </div>
            </div>

            {/* Job Role & Salary */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Job Role</label>
                    <select 
                        value={jobRole}
                        onChange={(e) => setJobRole(e.target.value)}
                        className="border border-gray-300 rounded-md text-sm font-medium text-slate-400 py-2 px-3 mt-1"
                    >
                        <option value="" disabled>Select Job Role...</option>
                        <option>Developer</option>
                        <option>Designer</option>
                        <option>Product Manager</option>
                        <option>Sales</option>
                        <option>Marketing</option>
                    </select>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-slate-400">Min Salary</label>
                        <input 
                            type="number" 
                            value={minSalary}
                            onChange={(e) => setMinSalary(e.target.value)}
                            placeholder="Min" 
                            className="border border-gray-300 rounded-md py-2 px-3 mt-1 text-slate-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-slate-400">Max Salary</label>
                        <input 
                            type="number" 
                            value={maxSalary}
                            onChange={(e) => setMaxSalary(e.target.value)}
                            placeholder="Max" 
                            className="border border-gray-300 rounded-md py-2 px-3 mt-1 text-slate-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-slate-400">Salary Type</label>
                        <select 
                            value={salaryType}
                            onChange={(e) => setSalaryType(e.target.value)}
                            className="border border-gray-300 rounded-md text-sm font-medium text-slate-400 py-2 px-3 mt-1"
                        >
                            <option value="" disabled>Select...</option>
                            <option>Hourly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Other fields for education, experience, vacancies, etc. */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Education Level</label>
                    <input 
                        type="text" 
                        value={education} 
                        onChange={(e) => setEducation(e.target.value)}
                        placeholder="Enter Education Level" 
                        className="border border-gray-300 rounded-md py-2 px-3 mt-1 text-slate-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Experience Level</label>
                    <input 
                        type="text" 
                        value={experience} 
                        onChange={(e) => setExperience(e.target.value)}
                        placeholder="Enter Experience Level" 
                        className="border border-gray-300 rounded-md py-2 px-3 mt-1 text-slate-400"
                    />
                </div>
            </div>

            <div className="flex flex-col mb-6">
                <label className="text-sm font-semibold text-slate-400">Job Expiration Date</label>
                <input 
                    type="date" 
                    value={expires} 
                    onChange={(e) => setExpires(e.target.value)} // Update expires state
                    className="border border-gray-300 rounded-md py-2 px-3 mt-1 text-slate-400"
                />
            </div>

            {/* Location (Country, City) */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">Country</label>
                    <input 
                        type="text" 
                        value={country} 
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Enter Country" 
                        className="border border-gray-300 rounded-md py-2 px-3 mt-1 text-slate-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-semibold text-slate-400">City</label>
                    <input 
                        type="text" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter City" 
                        className="border border-gray-300 rounded-md py-2 px-3 mt-1 text-slate-400"
                    />
                </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
                <label className="text-sm font-semibold text-slate-400">Job Description</label>
                <ReactQuill 
                    value={jobDescription} 
                    onChange={setJobDescription}
                    className="mt-2"
                />
            </div>

            {/* Job Requirements */}
            <div className="mb-6">
                <label className="text-sm font-semibold text-slate-400">Job Requirements</label>
                <ReactQuill 
                    value={jobRequirements} 
                    onChange={setJobRequirements}
                    className="mt-2"
                />
            </div>

            {/* Desirable Skills */}
            <div className="mb-6">
                <label className="text-sm font-semibold text-slate-400">Desirable Skills</label>
                <ReactQuill 
                    value={jobDesirableSkills} 
                    onChange={setJobDesirableSkills}
                    className="mt-2"
                />
            </div>

            {/* Job Benefits */}
            <div className="mb-6">
                <label className="text-sm font-semibold text-slate-400">Job Benefits</label>
                <div className="grid grid-cols-3 gap-4 mt-2">
                    {jobBenefitsOptions.map((benefit) => (
                        <label key={benefit} className="flex items-center">
                            <input 
                                type="checkbox"
                                checked={selectedBenefits.includes(benefit)}
                                onChange={() => handleBenefitToggle(benefit)}
                                className="mr-2"
                            />
                            {benefit}
                        </label>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <button 
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
                Post Job
            </button>
        </div>
    );
};

export default PostJob;
