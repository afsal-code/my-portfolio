import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f1a17] text-white py-6 border-t border-[#2e4a44]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
         <p className="text-sm">
          &copy; {new Date().getFullYear()} Mohammed Afsal. All rights reserved.
        </p>

         <div className="flex gap-4 text-xl">
          <a href="mailto:afsalhub@gmail.com" className="hover:text-green-400 transition">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohammed-afsal1/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/afsal-code" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
