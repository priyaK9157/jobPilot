// Components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-800 py-20'>
        <footer className="bg-gray-800 text-white py-10 w-9/12 mx-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* JobPilot Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">JobPilot</h3>
            <p>Connecting talents with opportunities.</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Candidate Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Candidate</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Find Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Resume Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Interview Preparation</a></li>
            </ul>
          </div>

          {/* Employers Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Employers</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Employer Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Hire Talent</a></li>
            </ul>
          </div>

          {/* Supports Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Supports</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
