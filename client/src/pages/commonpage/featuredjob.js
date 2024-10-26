import React, { useEffect, useState } from 'react';
import { getJob } from "../../services/operaions/jobs"; 
import Footer from "../../pages/commonpage/footer";
import Navbar from "../commonpage/navbar";
import Searchbox from "../commonpage/searchbox";
import { useNavigate } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
};

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [jobsPerPage] = useState(6); // Number of jobs per page
  const navigate = useNavigate();  

  useEffect(() => {
    setLoading(true);
    const fetchJobs = async () => {
      try {
        const response = await getJob();
        setJobs(response.data.data);
        setLoading(false);
        setFilteredJobs(response.data.data); 
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };
    fetchJobs();
  }, []);

  const handleJobClick = (jobId) => {
    navigate(`/job/${jobId}`);  
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = jobs.filter((job) =>
      job.designation.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase()) ||
      job.type.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to first page on search
  };

  // Calculate the current jobs to display
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div>


      <div className="w-9/12 mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-8">Featured Jobs</h1>
        
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
              {currentJobs.map((job) => (
                <div 
                  key={job._id} 
                  className="rounded-lg overflow-hidden cursor-pointer pb-2 border border-gray-200 bg-white"
                  onClick={() => handleJobClick(job._id)}  
                >
                  <div className="flex flex-col gap-4 px-4 py-2">
                    <div className='flex items-center gap-3'>
                      <div>
                        <p className="font-semibold text-md text-slate-900">{job.designation}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <p className="text-xs font-semibold text-green-600 bg-green-100 p-1 rounded uppercase">{job.type}</p>
                          <p className="text-sm text-slate-400">Salary: {job.salary}</p>
                        </div>
                        <div className='flex items-center mt-2 gap-4'>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCNXA0ZK1JCmNQMDF1ayhyp3US04HK0RA_Q&s" alt="Company logo" className='w-12 h-8' />
                          <div className='flex flex-col gap-1'>
                            <p className="text-sm text-slate-700 font-bold">Google Inc</p>
                            <div className="flex items-center text-md text-gray-500 gap-1">
                              <CiLocationOn className='text-slate-900'/>
                              <p className='text-sm text-slate-400'>{job.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="pagination flex justify-center items-center space-x-4 mt-6">
              <div 
                className={`arrow cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handlePageChange('prev')}
              >
                &lt;
              </div>
              <span className="text-md font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <div 
                className={`arrow cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handlePageChange('next')}
              >
                &gt;
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;
