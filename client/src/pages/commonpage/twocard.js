import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ bgColor, title, description }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-${bgColor} rounded-lg shadow-lg text-black p-6 transition-transform transform hover:scale-105`} 
      onClick={() => navigate('/create-account')}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-slate-500 text-sm mb-6">{description}</p>
      <div className="inline-flex items-center px-4 py-2 gap-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer transition duration-200">
        Register Now
        <FaArrowRight />
      </div>
    </div>
  );
};

const TwoCard = () => {
  const projects = [
    {
      id: 1,
      bgColor: 'gray-200',  
      title: 'Become a Candidate',
      description: 'Step into your next big role with confidence. Join us and showcase your potential!',
    },
    {
      id: 2,
      bgColor: 'blue-200',  
      title: 'Become an Employer',
      description: 'Post jobs and connect with potential candidates to find the best talent!',
    }
  ];


  const token = localStorage.getItem('token'); 
  if (token) {
    return null;
  }

  return (
    <div className="bg-gray-100 py-20 flex items-center justify-center">
      <div className="flex gap-6 w-9/12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            bgColor={project.bgColor}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TwoCard;
