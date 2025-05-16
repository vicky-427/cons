import { useNavigate } from 'react-router-dom'; 
import React, { useState, useEffect } from 'react';

// Import images correctly
import Logo from "../assets/logo.png";
import bgImage from "../assets/service.png";
import tin from "../assets/main.jpg";
import resi from "../assets/residential.jpg";
import commer from "../assets/Commercial.jpg";
import restore from "../assets/restore.jpg";
import ser from "../assets/service.png";
import pr from "../assets/proj.png";
import ab from "../assets/About.jpg";

const Main = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Debugging image paths
  console.log("Images Loaded:", { Logo, bgImage, tin, resi, commer, restore,ser,pr});

  return (
    <div className="min-h-screen rounded bg-white text-grey">
      {/* Header Section */}
      <header
  className={`fixed w-full top-0 z-50 px-4 py-4 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}
>
  <nav className="flex justify-center items-center h-full">
    <div className="flex gap-8"> {/* Increased gap between links */}
      {["Home", "Services", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className={`font-bold uppercase text-lg transition-colors ${isScrolled ? 'text-[#DAA520] hover:text-white' : 'text-black hover:text-white'}`}
        >
          {item}
        </a>
      ))}
    </div>
  </nav>
</header>

      {/* Hero Section */}
{/* Hero Section */}
<section
  id="home"
  style={{ backgroundImage: `url(${tin})` }}
  className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-grey/70"></div>

  {/* Content */}
  <div className="relative z-20 max-w-4xl px-8">
    {/* Logo */}
    <div className="flex justify-center mb-6"> {/* Centered logo container */}
      <img src={Logo} alt="logo" className="h-40 w-40 object-contain" /> {/* Increased logo size */}
    </div>

    {/* Heading */}
    <h1 className="text-6xl md:text-7xl uppercase font-bold mb-4 text-yellow-600 drop-shadow-lg">
      Building Your Dreams
    </h1>

    {/* Subheading */}
  
    {/* Button */}
   
  </div>
</section>
<section
  id="about"
  style={{ backgroundImage: `url(${ab})`}} // Background image applied
   className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
    {/* Text Section with Transparent Background */}
    <div className="md:w-1/2 text-center md:text-left px-6 bg-black bg-opacity-60 p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-yellow-600 mb-4">About SSS Builders</h2>
      <p className="text-lg text-white leading-relaxed">
        At <span className="font-semibold text-yellow-400">SSS Builders</span>, we are committed to transforming dreams into reality.
        With years of expertise in <strong>residential, commercial, and renovation projects</strong>, we deliver high-quality construction with cutting-edge designs.
      </p>
      <p className="text-lg text-white mt-4">
        Our team ensures <strong>precision, innovation, and durability</strong> in every project. 
        Let's build something incredible together!
      </p>

      {/* Call to Action Button */}
      <a 
        onClick={() => navigate("/recent")} 
        className="mt-6 inline-block px-6 py-3 bg-yellow-600 text-black font-bold rounded-full uppercase tracking-wide hover:bg-black transition hover:text-yellow-600"
      >
        Explore Our Work
      </a>
    </div>
  </div>
</section>

{/*serveice section*/}
      <section id="services" style={{ backgroundImage: `url(${ser})` }} className="relative h-screen flex items-center justify-center text-center bg-cover bg-center">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Residential Construction", description: "Custom homes and renovations." },
        { title: "Commercial Construction", description: "Professional spaces designed for success." },
        { title: "Restore", description: "Upgrade existing spaces with modern design." },
        { title: "Cost Construction Calculator", description: "Use to get the aproximate" }
      ].map((service, index) => (
        <div
        key={index}
        className="bg-black border border-gold h-32 flex flex-col items-center justify-center rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-[#DAA520] group cursor-pointer"
        onClick={() => {
          if (service.title === "Cost Construction Calculator") {
            navigate("/main");
          } else {
            window.open("https://forms.gle/qpSv76Mk9YnCueEs8", "_blank");
          }
        }}
      >
          <h3 className="text-lg font-bold text-white group-hover:text-black">{service.title}</h3>
          <p className="text-sm opacity-80 mt-1 text-white group-hover:text-black">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" style={{ backgroundImage: `url(${pr})` }}  className="relative h-screen flex items-center justify-center text-center bg-cover bg-center">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12 text-black">Recent Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Commercial Projects", description: "Completed in 2024, a state-of-the-art workspace.", image: resi },
        { title: "Residential Project", description: "Exquisite design and premium finishes.", image: commer },
        { title: "Restored Project", description: "A vibrant retail destination for the community.", image: restore }
      ].map((project, index) => (
        <div 
          key={index} 
          className="bg-gray-600 border border-gold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-[#DAA520] group"
          onClick={() => navigate("/recent")}
        >
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />          <div className="p-6 group-hover:text-black">
            <h3 className="text-xl text-white font-bold mb-2 group-hover:text-black">{project.title}</h3>
            <p className="text-white group-hover:text-black">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Footer Section */}
      <footer id="contact" className="bg-black text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: sivaprakash@gmail.com</p>
            <p>Phone:6381693896</p>
            <p>Address: 27A Jaya Paraksh Street,
 Kottur Maliyandipattinam,
 Pollachi,642114</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform) => (
                <a key={platform} href="#" className="hover:text-gold transition-colors">
                  <span className="sr-only">{platform}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
