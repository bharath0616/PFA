import React from 'react'
import newsletter from '../assets/newsletter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <div className='mt-32 bg-[#010D50] flex flex-col p-10'>
     <div className=' flex ml-20 mr-20 mb-10 justify-between items-center'>
        <h className='text-white '>
        <Link to="/" className='no-underline text-xl font-bold font-heading text-white'>PFA</Link>
        </h>
        <div className='flex gap-2'>
        <a href="https://www.instagram.com/bharath0616/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="bg-gray-400 rounded-full p-1" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="bg-gray-400 rounded-full p-1" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="bg-gray-400 rounded-full p-1" />
        </a>
        </div>
     </div>

     <div>
     <div className='flex justify-around '>
     <div className='flex justify-around '>
    <div className='flex flex-col gap-2'>

        <h className='text-white text-sm font-heading font-bold mb-3'>MENU</h>
        <hr className="bg-white mb-2 w-full" style={{ height: '0px' }}/>
        
        <div className='flex justify-between gap-5 items-center'>
            <div className='flex flex-col justify-center items-stretch'>
                <p className='text-white font-heading font-light text-xs xs:sm'>HOME</p>
                <p className='text-white font-heading font-light text-xs xs:sm'>CHATBOT</p>
                <p className='text-white font-heading font-light text-xs xs:sm'>SUPPORT</p>
            </div>
            <div className='flex flex-col justify-center items-stretch'>
                <p className='text-white font-heading font-light text-xs xs:sm'>TOOLS</p>
                <p className='text-white font-heading font-light text-xs xs:sm'>BLOGS</p>
                <p className='text-white font-heading font-light text-xs xs:sm'>CONTACT US</p>
            </div>
        </div>
    </div>
</div>
<div className='flex flex-col justify-center gap-3 items-start'>
    <div className='flex items-center gap-3 justify-center'>
    <img src={newsletter} className="bg-gray-400  rounded-xl " />
    <h className='text-white font-heading text-3xl font-bold'>Subscribe to our finance <br/>news weekly newsletter!</h>
    </div>
    <div className='relative w-full max-w-lg mx-auto'>
            <input 
                className='bg-white relative font-heading rounded-full text-md p-4  pr-56 w-sm' 
                placeholder='Enter email address'
            />
            <Link 
                to="/subscribe" 
                className='absolute z-10 inset-y-0 right-9 flex font-heading 
                text-xs xs:sm items-center justify-center bg-[#0328EE] p-5 rounded-full
                 text-white no-underline'
                style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
                Subscribe
            </Link>
        </div>
</div>
        </div>
     </div>
     <p className='text-white font-heading mt-10 ml-20 font-light text-xs xs:sm'>ⒸAll rights reserved</p>
    </div>
  )
}
