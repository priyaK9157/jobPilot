import React, { useEffect, useState } from 'react';
import { getJob } from "../../services/operaions/jobs"; 
import Footer from "../../pages/commonpage/footer";
import Navbar from "../commonpage/navbar";
import Searchbox from "../commonpage/searchbox";
import { useNavigate } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(9); 
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJob();
        setJobs(response.data.data);
        setFilteredJobs(response.data.data); 
      } catch (error) {
        console.error("Error fetching jobs", error);
      } finally {
        setLoading(false); 
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
    setCurrentPage(1); 
  };


  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div>
      <style>
        {`
          .loader {
            border: 8px solid rgba(0, 0, 0, 0.1);
            border-left-color: #3b82f6; /* Customize the color */
            border-radius: 50%;
            width: 40px; /* Adjust size as needed */
            height: 40px; /* Adjust size as needed */
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            margin-top: 20px;
          }

          .arrow {
            cursor: pointer;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 50%;
            background-color: white;
          }
        `}
      </style>
      <Navbar />
      <Searchbox onSearch={handleSearch} />
      <div className='bg-gray-200 p-4'>
        <div className='flex mx-auto justify-between w-9/12 text-base'>
          <p className='font-semibold text-slate-800'>Find Job</p>
          <p className='font-semibold text-slate-800'><span className='text-slate-500'>Home/ </span>find Job</p>
        </div>
      </div>
      <div className="w-9/12 mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-semibold mb-8">Featured Jobs</h1>
        {loading ? ( 
          <div className="flex justify-center items-center">
            <div className="loader"></div> 
          </div>
        ) : (
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
        )}
        <div className="pagination flex justify-center items-center space-x-4 mt-6">
        <div 
          className={`arrow cursor-pointer w-8 h-8 inline-flex items-center justify-center rounded-full bg-blue-500 text-blue-500 hover:bg-blue-600 transition-colors`}
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1} 
        >
          &lt;
        </div>
        <span className="text-md font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <div 
          className={`arrow cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-blue-500 hover:bg-blue-600 transition-colors`}
          onClick={() => handlePageChange('next')}
          disabled={currentPage === totalPages} 
        >
          &gt;
        </div>
      </div>

      </div>
      <Footer />
    </div>
  );
};

export default Featured;
