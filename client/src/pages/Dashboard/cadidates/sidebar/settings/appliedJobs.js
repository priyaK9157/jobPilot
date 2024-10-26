import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaDollarSign } from 'react-icons/fa6';
import { LuCalendarDays } from 'react-icons/lu';
import { TiTick } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const jobs = localStorage.getItem('appliedJobs');
    if (jobs) {
      setAppliedJobs(JSON.parse(jobs));
    }
  }, []);

  const handleViewDetails = (jobId) => {
    navigate(`/job/${jobId}`); 
  };

  return (
    <div className='w-6/12 ml-28 mt-10 '>
      <table className="bg-white overflow-hidden tracking-wide">
        <thead>
          <tr className="bg-gray-100 text-slate-400 text-xs uppercase">
            <th className="px-6 py-4 text-left">Job</th>
            <th className="px-6 py-4 text-left">Date Applied</th>
            <th className="px-6 py-4 text-center">Status</th>
            <th className="px-6 py-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {appliedJobs.length > 0 ? (
            appliedJobs.map((job, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-all duration-200"
              >
                <td className="px-6 py-4">
                  <div className='inline-flex items-center gap-2'>
                    <p className="text-sm font-bold text-slate-700">{job.designation}</p>
                    <p className="text-xs text-blue-500 bg-blue-100 rounded-xl px-2 py-1 whitespace-nowrap">{job.type || 'N/A'}</p>
                  </div>
                  <div className='inline-flex items-center gap-2'>
                    <p className="flex items-center gap-2 text-xs text-slate-400 mt-1 whitespace-nowrap">
                      <CiLocationOn className="text-lg" /> {job.location || 'N/A'}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-slate-400 mt-1 whitespace-nowrap">
                      <FaDollarSign className="" /> {job.salary || 'N/A'}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-slate-500 whitespace-nowrap">
                  {new Date(job.appliedDate).toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: false,
                  })}
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                      job.expires > Date.now() ? 'text-red-600 ' : 'text-green-600 '
                    }`}
                  >
                    <TiTick className="mr-1" />
                    {job.expires > Date.now() ? 'Expired' : 'Active'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="px-4 py-2 text-sm font-medium text-blue-500 bg-gray-200 hover:bg-blue-500 rounded-sm hover:text-white transition duration-200 whitespace-nowrap"
                    onClick={() => handleViewDetails(job._id)} // Pass job._id to the handler
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
                No applied jobs available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AppliedJobs;
