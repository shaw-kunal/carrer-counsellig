'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };




  
   const  linkList = [
    {
        title:"Home",
        link:"/"
    },
    {
        title:"About",
        link:"#about"
    },
    {
        title:"Services",
        link:"#services"
    },
       {
        title:"Contact",
        link:"#contact"
    },
   ]
  return (
    <nav className='container px-2 md:px-4 pt-2'>
      <div className={`2xl:max-w-7xl mx-auto px-3 lg:py-3  pt-2`}>
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div className="flex-shrink-0 flex items-center   lg:mr-14">
        <div>
        <Logo/>
        </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:bg-blue-750 text-gray-400 hover:bg-indigo-700 hover:text-white"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Expand main menu</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="27" width="27" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
          <ul
            className={`max-h-0 opacity-0 flex flex-col items-start mt-4 text-sm md:flex-row md:space-x-1 md:mt-0 md:border-0 w-full md:max-h-screen h-screen md:h-auto md:opacity-100 md:w-auto ${
              menuOpen ? 'min-h-screen opacity-100' : ''
            }`}
            id="navbar-default"
          >
            {
                linkList.map((item)=>(
                    <li key={item.title}>
              <Link href={item.link} className="block  outline-none no-underline hover:no-underline">
                <div className="text-gray-800 font-medium  px-6 py-2 rounded-[40px] hover:text-white hover:bg-indigo-600 dark:text-gray-350 dark:hover:text-white focus:text-white text-sm lg:text-base transition-colors duration-300">
                  {item.title}
                </div>
              </Link>
            </li>
           
                ))
            }
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
