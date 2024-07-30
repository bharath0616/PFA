import { faBars, faUsersLine } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-transparent'>
      <div className='flex items-center justify-between max-w-6xl mx-auto px-4 py-2'>
        <div className='flex items-center gap-8'>
          <Link to='/' className='no-underline'> 
            <h1 className='font-bold text-sm sm:text-xl cursor-pointer no-underline'>
              <span className='text-white font-heading'>PFA</span>
            </h1>
          </Link>
          <button onClick={toggleMenu} className={` ml-60 sm:hidden ${isOpen ? 'transform rotate-180' : ''}`}>
             <FontAwesomeIcon icon={faBars} className=" rounded-full " />
          </button>
          <ul className={`absolute sm:relative bg-black sm:bg-transparent transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out top-full left-0 w-full sm:w-auto flex-col sm:flex-row gap-4 list-none px-4 sm:px-0 z-20 sm:flex ${!isOpen && 'hidden'}`}>
            {['/data', '/tools', '/chatbot', '/contact-us'].map((path, index) => (
              <Link key={index} to={path} className='no-underline'>
                <li className='text-white text-sm sm:text-md font-heading font-light cursor-pointer p-3 hover:bg-[#0328EE] sm:hover:bg-transparent sm:hover:text-[#0328EE]' onClick={toggleMenu}>
                  {path.substring(1).toUpperCase()}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <ul className='hidden sm:flex list-none'>
          <Link to='/signin' className='no-underline bg-[#0328EE] px-6 py-3 rounded-full'>
            <li className='text-white bg-[#0328EE] text-sm sm:text-md font-heading font-light cursor-pointer'>SIGN UP / LOG IN</li>
          </Link>
        </ul>   
      </div>
    </header>
  );
}
