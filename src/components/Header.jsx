import React from 'react';
import bg from '../assets/video.mp4';
import bg2 from '../assets/video2.mp4';

const Header = () => {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      <video
        src={bg}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover absolute top-0 left-0 z-0"
      ></video>

      <div className="relative z-10 flex justify-center md:justify-start px-4 mt-24 md:mt-32 lg:mt-48 left-[150px]">
        <video
          src={bg2}
          autoPlay
          loop
          muted
          className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] h-auto object-cover 
          rounded-2xl 
          shadow-[0_0_60px_rgba(34,197,94,0.9)] 
          shadow-green-400/80 
          hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-start px-6 md:px-12 space-y-8 mt-[-550px] left-[1000px]">
        <h1 className="text-white text-5xl font-semibold font-sans">
          Hi, I'm Mohammed Afsal
        </h1>
        <p className="text-white text-3xl font-normal font-sans">
          A Passionate Mern-Stack Developer
        </p>
        <p className="text-white text-lg font-light font-mono max-w-3xl leading-relaxed">
          I specialize in building full-stack web applications using MongoDB, Express, React, and Node.js.
          With a strong focus on clean code, responsive design, and seamless user experiences,
          I turn ideas into dynamic, efficient, and scalable digital solutions.
        </p>

      </div>
      <div className=" relative z-10 flex space-x-7 left-[1050px] mt-7">
        <a
          href="/resume.jpg"
          download="resume.jpg"
          rel="noopener noreferrer"
          className="bg-green-600 text-white font-semibold px-6 py-2 rounded-3xl hover:bg-green-700 transition"
        >
          Download Resume
        </a>


        <a href='#projects' className="bg-gray-500 text-white font-semibold px-6 py-2 rounded-3xl hover:bg-gray-700 transition">
          View Projects
        </a>
      </div>

    </div>

  );
};

export default Header;
