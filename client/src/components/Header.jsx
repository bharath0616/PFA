import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {  

  return (
    <header className='bg-transparent '>
      <div className='flex items-center justify-between max-w-6xl mx-auto '>
        <div className='flex items-center gap-20'>
          <Link to='/' className='no-underline'> 
            <h1 className='font-bold text-sm sm:text-xl cursor-pointer no-underline'>
              <span className='text-white font-heading'>PFA</span>
            </h1>
          </Link>
          <ul className='hidden sm:flex gap-4 list-none'>
            <Link to='/tools' className='no-underline'><li className='text-white text-sm sm:text-md font-heading font-light cursor-pointer'>TOOLS</li></Link>
            <Link to='/chatbot' className='no-underline'><li className='text-white text-sm sm:text-md font-heading font-light cursor-pointer'>CHATBOT</li></Link>
            <Link to='/blogs' className='no-underline'><li className='text-white text-sm sm:text-md font-heading font-light cursor-pointer'>BLOGS</li></Link>
            <Link to='/support' className='no-underline'><li className='text-white text-sm sm:text-md font-heading font-light cursor-pointer'>SUPPORT</li></Link>
            <Link to='/contact-us' className='no-underline'><li className='text-white text-sm sm:text-md font-heading font-light cursor-pointer'>CONTACT US</li></Link> 
          </ul> 
        </div>


        <ul className='hidden sm:flex list-none'>
          <Link to='/signin' className='no-underline bg-[#0328EE] px-6 py-3 rounded-full'>
            <li className='text-white  bg-[#0328EE] text-sm sm:text-md font-heading font-light cursor-pointer'>SIGN UP / LOG IN</li>
          </Link>
        </ul>   
      </div>
    </header>
  );
}
