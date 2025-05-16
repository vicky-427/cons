import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.png";
import resi from "../assets/residential.jpg";
import commer from "../assets/Commercial.jpg";
import restore from "../assets/restore.jpg";

const Recent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Logo */}
      <div className="flex justify-center py-6">
        <img src={Logo} alt="logo" className="h-20 w-20 object-contain" />
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-6 py-2 bg-[#DAA520] text-black font-bold rounded-full hover:bg-white transition-colors"
        >
          Back to Home
        </button>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#DAA520]">Recent Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Commercial Projects", 
              description: "Completed in 2024, a state-of-the-art workspace featuring modern architecture and sustainable design elements.", 
              image: resi,
              details: "This commercial project spans over 50,000 sq ft and includes smart building features, energy-efficient systems, and premium finishes."
            },
            { 
              title: "Residential Project", 
              description: "Exquisite design and premium finishes in a luxury residential complex.", 
              image: commer,
              details: "A 20-story residential tower with 200 units, featuring high-end amenities, landscaped gardens, and state-of-the-art security systems."
            },
            { 
              title: "Restored Project", 
              description: "A vibrant retail destination for the community with modern amenities.", 
              image: restore,
              details: "Transformed an old industrial space into a modern retail complex, preserving historical elements while adding contemporary features."
            }
          ].map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 border border-[#DAA520] rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
            >
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#DAA520]">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-400 text-sm">{project.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent; 