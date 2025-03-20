import React from 'react';

const Nav = () => {
  return (
    <div>
      <ul className="fixed top-0 right-0 sm:right-[100px] z-50 flex flex-wrap justify-center sm:justify-end gap-x-4 sm:gap-x-8 text-white px-4 py-3 bg-[#0f1a17] sm:bg-transparent rounded w-full sm:w-auto">
        <li className="border border-green-300 px-3 py-1 sm:px-4 sm:py-2 rounded-3xl hover:bg-green-500 hover:text-black transition text-center">
          <a href="#home" className="text-sm sm:text-base">Home</a>
        </li>
        <li className="border border-green-300 px-3 py-1 sm:px-4 sm:py-2 rounded-3xl hover:bg-green-500 hover:text-black transition text-center">
          <a href="#about" className="text-sm sm:text-base">About</a>
        </li>
        <li className="border border-green-300 px-3 py-1 sm:px-4 sm:py-2 rounded-3xl hover:bg-green-500 hover:text-black transition text-center">
          <a href="#projects" className="text-sm sm:text-base">Projects</a>
        </li>
        <li className="hidden sm:block border border-green-300 px-3 py-1 sm:px-4 sm:py-2 rounded-3xl hover:bg-green-500 hover:text-black transition text-center">
          <a href="#skills" className="text-sm sm:text-base">Skills</a>
        </li>
        <li className="border border-green-300 px-3 py-1 sm:px-4 sm:py-2 rounded-3xl hover:bg-green-500 hover:text-black transition text-center">
          <a href="#contacts" className="text-sm sm:text-base">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
