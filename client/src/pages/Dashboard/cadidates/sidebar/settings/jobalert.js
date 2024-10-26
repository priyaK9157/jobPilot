import { getJob } from "../../../../../services/operaions/jobs";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";

const JobAlert = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await getJob();
        console.log("response", response);
        setJobs(response.data.data);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchJob();
  }, []);


  const handleApply = (index) => {
    const appliedJob = { 
      ...jobs[index],  
      appliedDate: new Date().toISOString()  
    };
  
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);

   
    const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    appliedJobs.push(appliedJob);
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
    console.log("apply", appliedJobs)
  };

  return (
    <div className="mt-10 w-7/12 ml-32">
      <p className="text-lg font-semibold mb-4">Job Alerts</p>
      <div className="gap-4">
        {jobs && jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-white rounded-md border-b">
              <div>
                <div className="flex gap-3">
                  <p className="text-base font-medium">{job.designation}</p>
                  <p className="text-xs text-blue-500 bg-blue-100 rounded-lg px-2 py-1">{job.type}</p>
                </div>

                <div className="flex gap-4 mt-3 font-semibold mb-3">
                  <p className="text-xs text-gray-400 inline-flex items-center gap-1">
                    <CiLocationOn className="text-lg" /> {job.location || "N/A"}
                  </p>
                  <p className="text-xs text-gray-400 inline-flex items-center gap-1">
                    <FaDollarSign className="text-lg" /> {job.salary || "N/A"}
                  </p>
                  <p className="text-xs text-gray-400 inline-flex items-center gap-1">
                    <LuCalendarDays className="text-lg" />
                    {new Date(job.expires).getTime() > Date.now() ? (
                      `${Math.ceil((new Date(job.expires).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} Days Remaining`
                    ) : (
                      "Job Expired"
                    )}
                  </p>
                </div>
              </div>

              <button
                className="px-4 py-2 bg-blue-100 text-blue-500 font-semibold rounded hover:bg-blue-600 hover:text-white transition duration-300 inline-flex items-center gap-2 text-sm"
                onClick={() => handleApply(index)}
              >
                Apply Now <FaArrowRight className="mt-1" />
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500">No job alerts available</p>
        )}
      </div>
    </div>
  );
};

export default JobAlert;
