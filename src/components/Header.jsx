import React, { useEffect, useRef, useState } from 'react';
import bg from '../assets/video.mp4';
import bg2 from '../assets/video2.mp4';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of header is visible
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <div id="home" ref={headerRef} className="relative w-full h-screen overflow-hidden">
      <video
        src={bg}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      ></video>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 md:px-12 lg:px-24 gap-10">

         <div
          className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 ease-out
            ${isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-90'
            }`}
        >
          <video
            src={bg2}
            autoPlay
            loop
            muted
            className="w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] h-auto object-cover rounded-2xl shadow-[0_0_60px_rgba(34,197,94,0.9)] hover:scale-105 transition-transform duration-500"
          />
        </div>

         <div
          className={`w-full md:w-1/2 text-center md:text-left space-y-6 transition-all duration-1000 ease-out delay-200
            ${isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-90'
            }`}
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold font-sans">
            Hi, I'm Mohammed Afsal
          </h1>
          <p className="text-white text-xl sm:text-2xl font-normal font-sans">
            A Passionate MERN-Stack Developer
          </p>
          <p className="text-white text-base sm:text-lg font-light font-mono leading-relaxed max-w-xl mx-auto md:mx-0">
            I specialize in building full-stack web applications using MongoDB, Express, React, and Node.js...
          </p>

           <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
          <a
  href="/my-portfolio/resume.jpg"
  download="resume.jpg"
  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-3xl transition"
>
  Download Resume
</a>


            <a
              href="#projects"
              className="bg-gray-500 text-white font-semibold px-6 py-2 rounded-3xl hover:bg-gray-700 transition text-center"
            >
              View Projects
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
