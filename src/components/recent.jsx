import React from 'react';
import Logo from "../assets/logo.png";
import commer from "../assets/Commercial.jpg";
import resi from "../assets/residential.jpg";
import commer1 from "../assets/commer1.jpg";
import tm from "../assets/things.jpg";
import rm from "../assets/restore1.jpg";


const RecentProjects = () => {
  const projectData = [
    {
      type: "Residential",
      title: "Luxury Villa - ECR",
      description: "A stunning 4BHK sea-facing villa with modern interiors and premium finishes.",
      budget: "₹50,00,000",
      address: "ECR Road, Chennai",
      startDate: "2023-02-01",
      endDate: "2023-12-15",
      image: resi
    },
    {
      type: "Commercial",
      title: "Commercial Complex - Anna Nagar",
      description: "Multi-floor office space with state-of-the-art infrastructure and parking.",
      budget: "₹1,20,00,000",
      address: "Anna Nagar, Chennai",
      startDate: "2022-05-10",
      endDate: "2023-03-30",
      image: commer
    },
    {
      type: "Apartment",
      title: "Apartment Project - Velachery",
      description: "2 & 3 BHK apartments with modular kitchen, gym and children's play area.",
      budget: "₹3,00,00,000",
      address: "coimabatore",
      startDate: "2021-07-15",
      endDate: "2023-01-20",
      image: commer1
    },
    {
      type: "Renovation",
      title: "Renovation ",
      description: "Complete home renovation with false ceiling, modern lighting and tiling.",
      budget: "₹15,00,000",
      address: "pollachi",
      startDate: "2023-01-05",
      endDate: "2023-06-10",
      image: rm
    },
    {
      type: "Resdiential",
      title: "house",
      description: "Complete home renovation with false ceiling, modern lighting and tiling.",
      budget: "₹15,00,000",
      address: "kottur",
      startDate: "2023-01-05",
      endDate: "2023-06-10",
      image: tm
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <header className="bg-black py-5 text-center">
        <div className="flex justify-center items-center mb-4">
          <img 
            src={Logo} 
            alt="SSS Builders Logo" 
            className="h-24 w-auto" // Increased size to h-24 (6rem/96px)
          />
        </div>
        <h1 className="text-3xl font-bold" style={{ color: '#DAA520' }}>
          Recent Projects - SSS Builders
        </h1>
      </header>

      <div className="max-w-6xl mx-auto my-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectData.map((project, index) => (
          <div 
            key={index}
            className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: '#DAA520' }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-1"><span className="font-bold text-gray-900">Type:</span> {project.type}</p>
              <p className="text-sm text-gray-700 mb-1"><span className="font-bold text-gray-900">Description:</span> {project.description}</p>
              <p className="text-sm text-gray-700 mb-1"><span className="font-bold text-gray-900">Budget:</span> {project.budget}</p>
              <p className="text-sm text-gray-700 mb-1"><span className="font-bold text-gray-900">Address:</span> {project.address}</p>
              <p className="text-sm text-gray-700 mb-1"><span className="font-bold text-gray-900">Start Date:</span> {project.startDate}</p>
              <p className="text-sm text-gray-700"><span className="font-bold text-gray-900">End Date:</span> {project.endDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;