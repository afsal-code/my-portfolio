 import React from 'react'
 
 const Nav = () => {
   return (
    <div>
    <ul className="fixed top-0 right-[100px] z-50 flex gap-x-16 text-white   px-6 py-4 rounded-bl-2x  ">
    <li className="border border-green-300 px-4 py-2 rounded-3xl hover:bg-green-500 hover:text-black transition">
        <a href="#home">Home</a>
    </li>
    <li className="border border-green-300 px-4 py-2 rounded-3xl hover:bg-green-500 hover:text-black transition">
        <a href="#about">About</a>
    </li>

    <li className="border border-green-300 px-4 py-2 rounded-3xl hover:bg-green-500 hover:text-black transition">
        <a href="#projects">Projects</a>
    </li>
    <li className="border border-green-300 px-4 py-2 rounded-3xl hover:bg-green-500 hover:text-black transition">
        <a href="#skills">Skills</a>
    </li>
    <li className="border border-green-300 px-4 py-2 rounded-3xl hover:bg-green-500 hover:text-black transition">
        <a href="#contacts">Contacts</a>
    </li>
    
</ul>

     </div>
   )
 }
 
 export default Nav
 