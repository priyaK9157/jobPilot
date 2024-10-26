import React, { useEffect, useState } from 'react';
import { getJobsPostedByUser } from "../../../../../services/operaions/jobs";
import { TiTick } from "react-icons/ti";
import { BsPersonCheck } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchUserJobs = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await getJobsPostedByUser({
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log("Response:", response.data.data);
      setJobs(response.data.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching user jobs:', err);
      setError('Failed to load jobs. Please try again later.');
      setLoading(false);
    }
  };

  const getAppliedJobCount = (jobId) => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

    const jobCount = appliedJobs.filter(job => job._id === jobId).length;

    return jobCount;
  };
  
  
  

  useEffect(() => {
    fetchUserJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  const handleSelectAction = (action, id) => {
    if (action === 'view') {
      navigate(`/job/${id}`);
    } else if (action === 'expire') {
      console.log(`Making Job ID: ${id} expire`);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 ml-32">My Jobs</h2>
      <div className="overflow-x-auto ml-32 w-7/12">
        <table className="min-w-full border-spacing-4 bg-white border border-gray-200 shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-slate-600 text-sm uppercase tracking-wider">
              <th className="px-6 py-3 text-left">Jobs</th>
              <th className="px-6 py-3 text-center">Status</th>
              <th className="px-6 py-3 text-center">Applications</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job._id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4 font-semibold text-base">
                  {job.designation}
                  <div className="flex gap-3 text-xs text-slate-400 mt-1">
                    <p>{job.type}</p>
                    <ul>
                      <li>
                        {Math.ceil((new Date(job.expires).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days remaining
                      </li>
                    </ul>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`inline-flex items-center text-sm font-semibold ${job.expires > Date.now() ? 'text-red-500' : 'text-green-500'}`}>
                    <TiTick className="mr-1" />
                    {job.expires > Date.now() ? "Expire" : "Active"}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="inline-flex items-center text-sm font-semibold text-slate-500 gap-2">
                    <BsPersonCheck />
                    {getAppliedJobCount(job._id)} 
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <select
                    onChange={(e) => handleSelectAction(e.target.value, job._id)}
                    defaultValue=""
                    className="border border-gray-300 px-3 py-1 rounded-lg bg-gray-100 text-blue-500 text-sm font-semibold focus:outline-none"
                  >
                    <option value="" disabled>View Application</option>
                    <option value="view">View Detail</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
