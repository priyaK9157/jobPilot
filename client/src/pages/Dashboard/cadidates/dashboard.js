import React, { useState } from "react";
import Navbar from "../../commonpage/navbar";
import Searchbox from "../../commonpage/searchbox";
import { MdLibraryBooks } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdSettings } from "react-icons/md";
import Overview from "../cadidates/sidebar/overview"
import Setting from "../cadidates/sidebar/settings"
import JobAlert from "../cadidates/sidebar/settings/jobalert"
import AppliedJobs from "../cadidates/sidebar/settings/appliedJobs"



const FavoriteJobs = () => <div>Favorite Jobs Content</div>



const Sidebar = () => {

  const [activeSection, setActiveSection] = useState("overview");

 
  const renderSection = () => {
    console.log("Active section:", activeSection); 
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "applied-jobs":
        return <AppliedJobs />;
      case "favorite-jobs":
        return <FavoriteJobs />;
      case "job-alert":
        return <JobAlert />;
      case "settings":
        return <Setting />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 bg-white  border-b-2">
        <Navbar />
        <Searchbox />
      </div>

      <div className="flex w-9/12 mx-auto mt-28">
        {/* Sidebar */}
        <div className="fixed h-[100vh] w-56 text-slate-400 p-4 border-r-2  border-slate-200">
            <h2 className="text-xs font-semibold mb-6 uppercase">Candidate dashboard</h2>
            <ul className="font-semibold">
              <li
                className={`mb-4 hover:text-blue-500 hover:bg-blue-200 hover:p-2 cursor-pointer ${
                  activeSection === "overview" ? "bg-blue-200 text-blue-500 p-2" : ""
                }`}
                onClick={() => setActiveSection("overview")}
              >
                <span className="inline-flex text-sm items-center gap-2">
                  <MdLibraryBooks className="text-lg" /> Overview
                </span>
              </li>
              <li
                className={`mb-4 hover:text-blue-500 hover:bg-blue-200 hover:p-2 cursor-pointer ${
                  activeSection === "applied-jobs" ? "bg-blue-200 text-blue-500 p-2" : ""
                }`}
                onClick={() => setActiveSection("applied-jobs")}
              >
                <span className="inline-flex text-sm items-center gap-2">
                  <FaShoppingBag className="text-lg" /> Applied Jobs
                </span>
              </li>
              {/* <li
                className={`mb-4 hover:text-blue-500 hover:bg-blue-200 hover:p-2 cursor-pointer ${
                  activeSection === "favorite-jobs" ? "bg-blue-200 text-blue-500 p-2" : ""
                }`}
                onClick={() => setActiveSection("favorite-jobs")}
              >
                <span className="inline-flex text-sm items-center gap-2">
                  <CiSaveDown2 className="text-lg" /> Favorite Jobs
                </span>
              </li> */}
              <li
                className={`mb-4 hover:text-blue-500 hover:bg-blue-200 hover:p-2 cursor-pointer ${
                  activeSection === "job-alert" ? "bg-blue-200 text-blue-500 p-2" : ""
                }`}
                onClick={() => setActiveSection("job-alert")}
              >
                <span className="inline-flex text-sm items-center gap-2">
                  <HiOutlineBellAlert className="text-lg" /> Job Alert
                </span>
              </li>
              <li
                className={`mb-4 hover:text-blue-500 hover:bg-blue-200 hover:p-2 cursor-pointer ${
                  activeSection === "settings" ? "bg-blue-200 text-blue-500 p-2" : ""
                }`}
                onClick={() => setActiveSection("settings")}
              >
                <span className="inline-flex text-sm items-center gap-2">
                  <MdSettings className="text-lg" /> Settings
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 p-5 w-full">
          {renderSection()}
        </div>
    </div>
  );
};

export default Sidebar;
