import React, { useEffect, useRef, useState } from 'react';
import tourism from '../assets/tourism.jpg';
import ecommerce from '../assets/ecomerce.jpg';
import registration from '../assets/registration.jpg';

const Projects = () => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedVisibleCards = [...visibleCards];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            updatedVisibleCards[index] = true;
          } else {
            const index = parseInt(entry.target.dataset.index);
            updatedVisibleCards[index] = false;
          }
        });
        setVisibleCards(updatedVisibleCards);
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const projectList = [
    {
      title: 'Tourism Website',
      description: 'A tourism site built with HTML, CSS, and JavaScript to explore travel destinations.',
      image: tourism,
      demoLink: 'https://afsal-code.github.io/Tourism-Front-page/',
      codeLink: 'https://github.com/afsal-code/Tourism-Front-page',
    },
    {
      title: 'E-commerce',
      description: 'An e-commerce platform with product listings and cart functionality using React.',
      image: ecommerce,
      demoLink: 'https://afsal-code.github.io/FetchApi-Demo/',
      codeLink: 'https://github.com/afsal-code/FetchApi-Demo',
    },
    {
      title: 'Multiverse-Character',
      description: 'A user registration and login system with form validation.',
      image: registration,
      demoLink: 'https://afsal-code.github.io/multiverse-character-viewer/',
      codeLink: 'https://github.com/afsal-code/multiverse-character-viewer',
    },
  ];

  return (
    <div id="projects" className="w-full min-h-screen bg-[#0f1a17] text-white p-10 overflow-auto">
      <h1 className="text-5xl font-bold text-center mb-12">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 mt-[100px]">
        {projectList.map((project, index) => (
        <div
        key={index}
        data-index={index}
        ref={(el) => (cardRefs.current[index] = el)}
        className={`bg-[#15231f] border border-[#2e4a44] p-6 rounded-xl shadow-md transition-all duration-700 ease-out 
          ${
            visibleCards[index]
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-90'
          }
          hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:scale-105`}
      >
      
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-[250px] object-cover rounded-lg mb-6 border border-[#2e4a44]"
            />
            <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
            <p className="mb-4 text-gray-300 text-sm flex-grow">{project.description}</p>
            <div className="flex justify-between gap-4 mt-auto">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-[#2e4a44] hover:bg-[#3e645d] text-white py-2 rounded-full transition duration-300">
                  Source Code
                </button>
              </a>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-[#2e4a44] hover:bg-[#3e645d] text-white py-2 rounded-full transition duration-300">
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/afsal-code?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-transparent border border-[#2e4a44] text-white px-6 py-2 rounded-full hover:bg-[#2e4a44] transition duration-300 animate-pulse">
            View All Projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
