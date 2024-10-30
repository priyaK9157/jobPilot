import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserByEmail } from "../../services/operaions/Auth";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


const Searchbox = ({ onSearch }) => {
  const [userType, setUserType] = useState('');

  const fetchData = async () => {
    try {
      const token = await localStorage.getItem("token");
      if (token) {
        const response = await getUserByEmail({
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const userType = response.data.data[0].userType;
        setUserType(userType);
      }
    } catch (error) {
      console.error("Error", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };

  return (
    <div className="flex flex-col md:flex-row justify-between w-9/12 mx-auto py-3">
      <span className="text-2xl font-bold">Jobpilot</span>
      <div className="inline-flex items-center border border-slate-300 mt-2 md:mt-0">
        <IoSearch className="text-blue-500 pl-2 text-3xl" />
        <input
          className="rounded-md px-5 py-2 focus:outline-none w-36 sm:w-96"
          placeholder="Job title, keyword, company"
          onChange={(e) => onSearch(e.target.value)}  
          onClick={()=>navigate("/jobpage")}
        />
      </div>
      <span className="flex gap-4 items-center mt-2 md:mt-0">
        {token ? (
          <>
            {userType === 'employer' ? (
              <>
                <div className="flex gap-2">
                  <button
                    className="bg-blue-600 px-4 py-2 text-sm rounded-sm text-white hover:bg-blue-800 hover:text-white"
                    onClick={() => navigate("/emp-dashboard")}
                  >
                    Post A Job
                  </button>
                  <button
                    className="bg-blue-600 px-4 py-2 text-sm rounded-sm text-white hover:bg-blue-800 hover:text-white"
                    onClick={handleLogout}  
                  >
                    Logout
                  </button>
                </div>
                <FaUserCircle
                  className="ml-3 text-3xl text-blue-600 cursor-pointer"
                  onClick={() => navigate("/emp-dashboard")}
                />
              </>
            ) : (
              <>
                <div className="flex gap-2">
                  <button
                    className="bg-blue-600 px-4 py-2 text-sm rounded-sm text-white hover:bg-blue-800 hover:text-white"
                    onClick={() => navigate("/dashboard")}
                  >
                    Apply for a Job
                  </button>
                  <button
                    className="bg-blue-600 px-4 py-2 text-sm rounded-sm text-white hover:bg-blue-800 hover:text-white"
                    onClick={handleLogout} 
                  >
                    Logout
                  </button>
                </div>
                <FaUserCircle
                  className="ml-3 text-3xl text-blue-600 cursor-pointer"
                  onClick={() => navigate("/dashboard")}
                />
              </>
            )}
          </>
        ) : (
          <button
            className="bg-blue-600 px-4 py-2 text-sm rounded-sm text-white hover:text-blue-500 hover:bg-white border border-blue-500"
            onClick={() => navigate("/create-account")}
          >
            Sign Up
          </button>
        )}
      </span>
    </div>
  );
};

export default Searchbox; 