import Navbar from "../pages/commonpage/navbar"
import Searchbox from "../pages/commonpage/searchbox"
import { useState } from "react";
import home from "../img/homi.png"
import { IoBagRemoveOutline } from "react-icons/io5";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import CardComponent from "../pages/commonpage/card"
import { VscAccount } from "react-icons/vsc";
import { IoCloudUpload } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { FaCode, FaChartLine, FaUsers, FaMobileAlt, FaPenNib, FaCloud, FaShoppingCart, FaCamera } from 'react-icons/fa';
import { FaApple, FaGoogle, FaMicrosoft, FaAmazon, FaFacebook, FaCarAlt, FaMapMarkerAlt } from "react-icons/fa";
import RatingsAndReviewsPage from "../pages/rantings"
import Footer from "../pages/commonpage/footer"
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Featuredjob from "../pages/commonpage/featuredjob"
import Twocard from "../pages/commonpage/twocard"
import JobPage from "../pages/jobpage/jobpage"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [filteredJobs, setFilteredJobs] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = jobs.filter((job) =>
          job.designation.toLowerCase().includes(query.toLowerCase()) ||
          job.location.toLowerCase().includes(query.toLowerCase()) ||
          job.type.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredJobs(filtered);
      };
    return (
        <div >
            <Navbar/>
            <Searchbox onSearch={handleSearch}  />
            <div className="bg-gray-100">
                    <div className="flex flex-wrap justify-between gap-20 w-9/12 py-16 mx-auto">
                        <div>
                            <p className="text-3xl sm:text-4xl font-semibold max-w-xs sm:max-w-md">Find a Job that suits your interest & skills.</p>
                            <p className="text-slate-400 max-w-xs sm:max-w-md py-4">vsdhv hsdhag sdugw jhsduwhjd  jhsudh jshduh bduhdue bdh  hdyghd hdhbd hved hde.</p>

                            <div className="bg-white border border-slate-300 mt-4 p-2 mb-3 flex flex-wrap rounded-lg" onClick={()=>navigate("/jobpage")}>
                                <IoIosSearch className="flex items-center text-blue-500 pt-2 text-4xl"/>
                                <input placeholder="Job title, keyword..." className="py-2 focus:outline-none"/>
                                <span className="mr-2 flex items-center text-slate-300">|</span>
                                <IoLocationOutline  className="flex items-center text-blue-500 pt-2 text-4xl"/>
                                <input placeholder="your location" className="py-2 focus:outline-none"/>
                                <span className="text-white bg-blue-600 px-3 flex items-center -ml-16 rounded-md">Find job</span>
                            </div>

                            <div>
                                <p className="text-slate-400">Suggstions: Designer, Programing, <span className="text-blue-400 text-sm">Digital Marketing</span>, Video Animation </p>
                            </div>
                        </div>
                        <div>
                            <img src={home} alt="Find a Job " className="w-80 h-72"/>
                        </div>
                        
                    </div>
                    <CardComponent/>

                    {/* most popular vacancies */}

                    <div className="bg-white">
                        <div className="w-9/12 mx-auto py-20">
                            <p className="font-semibold text-2xl sm:text-3xl mb-8">Most Popular Vacancies</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cold-3 lg:grid-cols-4 gap-10">
                                <div className="mb-4">
                                    <p className="font-semibold">Software Engineer</p>
                                    <p className="text-slate-500 text-sm pt-1">1500 Open Positions</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold">Data Scientist</p>
                                    <p className="text-slate-500 text-sm pt-1">800 Open Positions</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold">Mobile App Developer</p>
                                    <p className="text-slate-500 text-sm pt-1">700 Open Positions</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold">Digital Marketing Specialist</p>
                                    <p className="text-slate-500 text-sm pt-1">350 Open Positions</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold">Product Manager</p>
                                    <p className="text-slate-500 text-sm pt-1">500 Open Positions</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold">UI/UX Designer</p>
                                    <p className="text-slate-500 text-sm pt-1">600 Open Positions</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold">DevOps Engineer</p>
                                    <p className="text-slate-500 text-sm pt-1">900 Open Positions</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold">Full-Stack Developer</p>
                                    <p className="text-slate-500 text-sm pt-1">1200 Open Positions</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold">Machine Learning Engineer</p>
                                    <p className="text-slate-500 text-sm pt-1">400 Open Positions</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold">Mobile App Developer</p>
                                    <p className="text-slate-500 text-sm pt-1">700 Open Positions</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold">Digital Marketing Specialist</p>
                                    <p className="text-slate-500 text-sm pt-1">350 Open Positions</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-semibold">Cloud Architect</p>
                                    <p className="text-slate-500 text-sm pt-1">450 Open Positions</p>
                                </div>
            </div>
                        </div>
                    </div>


                    {/* how job pilot work */}
                    <div className="bg-gray-100 py-20">
                        <p className="text-2xl sm:text-3xl font-semibold w-9/12 flex justify-center mx-auto items-center">How jobpilot work</p>
                        <div className="w-9/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto justify-between py-10">
                            <div className="p-10 flex flex-col items-center justify-center">
                            <VscAccount className="text-6xl text-blue-600 bg-white p-4 m-2 rounded-full"/>
                            <p className="font-bold">Create Account</p>
                            <p className="text-sm text-slate-500">Please create an account</p>
                            </div>

                            <div className="p-10 flex flex-col items-center justify-center bg-white rounded-lg">
                            <IoCloudUpload  className="text-6xl text-white bg-blue-500 rounded-full p-4 m-2"/>
                            <p className="font-bold">Upload CV/Resume</p>
                            <p className="text-sm text-slate-500 text-center">Kindly upload your cv/resume here</p>
                            </div>
                            <div className="p-10 flex flex-col items-center justify-center">
                            <FaSearchPlus className="text-6xl text-blue-600 m-2 bg-white p-4 rounded-full"/>
                            <p className="font-bold">Find suitable job</p>
                            <p className="text-sm text-slate-500 text-center">Here you can find your suitable job</p>
                            </div>
                            <div className="p-10 flex flex-col items-center justify-center">
                            <SiTicktick  className="text-6xl text-blue-600 bg-white p-4 m-2 rounded-full"/>
                            <p className="font-bold">Apply Job</p>
                            <p className="text-sm text-slate-500 text-center">You can now apply</p>
                            </div>
                        </div>
                    </div>


                    {/* popular category */}

                    <div className="bg-white py-20">
                        <div className="w-9/12 mx-auto text-sm">
                            <p className="font-semibold text-2xl sm:text-3xl mb-8">Popular Categories</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                <div className="flex items-center bg-white p-4 rounded-md hover:shadow-xl cursor-pointer">
                                    <FaCode className="text-blue-500 text-3xl sm:text-4xl mr-4 bg-blue-100 p-2 rounded-md" />
                                    <div>
                                        <p className="font-semibold">Software Development</p>
                                        <p className="text-gray-500">1500 Open Positions</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-md hover:shadow-xl cursor-pointer">
                                    <FaChartLine className="text-blue-500 text-3xl sm:text-4xl mr-4 bg-blue-100 p-2 rounded-md" />
                                    <div>
                                        <p className="font-semibold">Data Analysis</p>
                                        <p className="text-gray-500">800 Open Positions</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-md hover:shadow-xl cursor-pointer">
                                    <FaUsers className="text-blue-500 text-3xl sm:text-4xl mr-4 bg-blue-100 p-2 rounded-md" />
                                    <div>
                                        <p className="font-semibold">Human Resources</p>
                                        <p className="text-gray-500">400 Open Positions</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-md hover:shadow-xl cursor-pointer">
                                    <FaMobileAlt className="text-blue-500 text-3xl sm:text-4xl mr-4 bg-blue-100 p-2 rounded-md" />
                                    <div>
                                        <p className="font-semibold">Mobile Development</p>
                                        <p className="text-gray-500">900 Open Positions</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-md hover:shadow-xl cursor-pointer">
                                    <FaPenNib className="text-blue-500 text-3xl sm:text-4xl mr-4 bg-blue-100 p-2 rounded-md" />
                                    <div>
                                        <p className="font-semibold">Creative Writing</p>
                                        <p className="text-gray-500">300 Open Positions</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-md hover:shadow-xl cursor-pointer">
                                    <FaCloud className="text-blue-500 text-3xl sm:text-4xl mr-4 bg-blue-100 p-2 rounded-md" />
                                    <div>
                                        <p className="font-semibold">Cloud Computing</p>
                                        <p className="text-gray-500">700 Open Positions</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-md hover:shadow-xl cursor-pointer">
                                    <FaShoppingCart className="text-blue-500 text-3xl sm:text-4xl mr-4 bg-blue-100 p-2 rounded-md" />
                                    <div>
                                        <p className="font-semibold">eCommerce</p>
                                        <p className="text-gray-500">500 Open Positions</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-md hover:shadow-xl cursor-pointer">
                                    <FaCamera className="text-blue-100 text-3xl sm:text-4xl mr-4 bg-blue-600 p-2 rounded-md" />
                                    <div>
                                        <p className="font-semibold">Photography</p>
                                        <p className="text-gray-500">250 Open Positions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <Featuredjob/>

                    {/* top companies */}

                    


                    
                    
            </div>
            <RatingsAndReviewsPage/>
            <Twocard/>
            <Footer/>
          
        </div>
    )
}

export default HomePage