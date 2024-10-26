import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById } from "../../services/operaions/jobs";
import Navbar from "../commonpage/navbar";
import Footer from "../../pages/commonpage/footer";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaCalendarAlt, FaHourglassEnd, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";

const JobDetails = () => {
  const { jobId } = useParams();  
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await getJobById(jobId);
        setJob(response.data.data);  
      } catch (error) {
        console.error("Error fetching job details", error);
      }
    };
    fetchJob();
  }, [jobId]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="w-9/12  mx-auto flex justify-around mt-8 gap-6">
        
        {/* Left Side - Job Description, Requirements, Desirable */}
        <div className="col-span-2 space-y-6 max-w-[50%]">
          <h1 className="text-2xl font-semibold">{job.designation}</h1>
          <div className='gap-3 inline-flex'>
              <p className='text-slate-500 font-semibold'>at {job.company}</p>
              <p className='uppercase text-sm font-semibold px-3 py-1 rounded text-white bg-green-600'>{job.type}</p>
          </div>

         <div>
         <h2 className="text-lg font-semibold ">Job Description</h2>
         <p className='text-slate-500 text-base'>{job.description}</p>
         </div>

         {/* Requirements */}
          {job.requirements && Array.isArray(job.requirements) && (
            <div>
            <h2 className="text-lg font-semibold mt-6">Requirements</h2>
            <ul className="list-disc pl-6 text-slate-500 text-base">
              {job.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Desirable */}
        {job.desirable && Array.isArray(job.desirable) && (
          <div>
            <h2 className="text-lg font-semibold mt-6">Desirable</h2>
            <ul className="list-disc pl-6 text-slate-500 text-base">
              {job.desirable.map((desirable, index) => (
                <li key={index}>{desirable}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {job.benefits && Array.isArray(job.benefits) && (
          <div>
            <h2 className="text-lg font-semibold mt-6">Benefits</h2>
            <ul className="list-disc pl-6 text-slate-500 text-base">
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        </div>

        {/* Right Side - Cards */}
        <div className="col-span-1 py-20 -mr-24">
          
          {/* First Row - Salary, Location, Job Type */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3">
            {/* Salary Div */}
            <div className="bg-white border px-24 flex flex-col items-center justify-center py-6">
              <div className="mb-2 flex items-center">
                {/* Salary Icon */}
                <h3 className="font-semibold text-lg">Salary</h3>
              </div>
              <p className="text-green-600 font-semibold text-lg whitespace-nowrap">${job.salary}</p>
              <p className='text-slate-400 text-xs font-semibold whitespace-nowrap'>yearly salary</p>
            </div>

            {/* Location Div */}
            <div className="bg-white border px-14 flex flex-col items-center justify-center py-6">
            <FaMapMarkerAlt className="text-blue-600 mr-2" size={24} /> 
              <div className="mt-1 flex items-center">
                <h3 className="font-semibold text-lg whitespace-nowrap">Job Location</h3>
              </div>
              <p className="text-slate-400 whitespace-nowrap text-sm font-semibold">{job.location}</p>
            </div>

            {/* Job Type Div */}
            <div className="bg-white px-20 flex flex-col items-center justify-center py-6">
            <FaBriefcase className="text-blue-600 mr-2" size={24} /> 
              <div className="mt-1 flex items-center">
                <h3 className="font-semibold text-lg whitespace-nowrap">Job Type</h3>
              </div>
              <p className="text-slate-400 whitespace-nowrap text-sm font-semibold">{job.type}</p>
            </div>
          </div>


          {/* Second Row - Benefits */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Job Benefits</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {job.benefits?.map((tag, index) => (
                <span key={index} className="inline-block font-bold bg-gray-100 text-green-600 px-3 py-1 rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>




           {/* Third Row - Job Overview */}
          <div className="grid grid-cols-3 gap-1 mt-6 border">
            {/* Posted On */}
            <div className="bg-white p-4 rounded-lg  text-center">
              <FaCalendarAlt className="text-blue-500 mx-auto mb-2" size={24} /> {/* Icon row */}
              <p className="font-semibold">Posted On</p> {/* Strong tag row */}
              <p className="text-sm text-gray-400">{new Date(job.posted).toLocaleDateString()}</p> {/* Job details row */}
            </div>

            {/* Expires On */}
            <div className="bg-white p-4 text-center">
              <FaHourglassEnd className="text-blue-500 mx-auto mb-2" size={24} /> {/* Icon row */}
              <p className="font-semibold">Expires On</p> {/* Strong tag row */}
              <p className="text-sm text-gray-400">
                {job.expires ? new Date(job.expires).toLocaleDateString() : "Not specified"}
              </p> {/* Job details row */}
            </div>

            {/* Experience Level */}
            <div className="bg-white p-4 rounded-lg text-center">
              <FaBriefcase className="text-blue-500 mx-auto mb-2" size={24} /> {/* Icon row */}
              <p className="font-semibold">Experience Level</p> {/* Strong tag row */}
              <p className="text-sm text-gray-400">{job.experienceLevel}</p> {/* Job details row */}
            </div>

            {/* Education */}
            <div className="bg-white p-4 rounded-lg text-center">
              <FaGraduationCap className="text-blue-500 mx-auto mb-2" size={24} /> {/* Icon row */}
              <p className="font-semibold">Education</p> {/* Strong tag row */}
              <p className="text-sm text-gray-400">
                {job.education ? job.education : "Not specified"}
              </p> {/* Job details row */}
            </div>
          </div>

          {/* Fourth Row - Share Job */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Share This Job</h3>
            <div className="flex gap-4 mt-4">
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 text-xl" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 text-xl" />
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-800 text-xl" />
              </a>
              <a href={`mailto:?subject=Check out this job&body=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-gray-500 text-xl" />
              </a>
            </div>
          </div>

          {/* Fifth Row - Job Tags */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">Job Tags</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {job.tags?.map((tag, index) => (
                <span key={index} className="inline-block bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetails;
