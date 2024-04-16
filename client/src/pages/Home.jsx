import React from 'react'
import  pc from '../assets/pc.png'
import glow from '../assets/glow.png'
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'
import g5 from '../assets/g5.png'
import robo from '../assets/robo.png'

import s41 from '../assets/s4-1.png'
import s42 from '../assets/s4-2.png'
import s43 from '../assets/s4-3.png'
import s44 from '../assets/s4-4.png'
import s45 from '../assets/s4-5.png'

import video from '../assets/video.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import investment from '../assets/investment.png'
import face from '../assets/face.png'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='flex flex-col w-full mr-0 ml-0 right-0 left-0 '>
        {/* first section -------->*/}
        <div className='flex justify-around ml-40 mt-10'>
  <div className='flex justify-center mb-40 flex-col'>
    <h1 className='text-white font-heading font-bold text-5xl'>
      Welcome to Personalized Financial Assistant
    </h1>
    <p className='text-white font-heading font-light'>
      An all-in-one solution integrating personalized recommendations, 
      interactive chatbot support, and comprehensive content management for 
      enhanced financial literacy.
    </p>
    <Link to='/data' className='no-underline   bg-[#0328EE] p-3 max-w-20 flex justify-centeritems-center rounded-full'>
      <li className='text-white list-none bg-[#0328EE] text-sm sm:text-md font-heading font-bold cursor-pointer'>
      Enter Data</li>
    </Link>
  </div>

  <div className='relative flex justify-end items-end w-full max-w-lg '>  
   <img src={glow} className="absolute top-[-20%] bg-transparent h-xl right-32 w-full opacity-70 z-0" alt="Glow"/>
   <img src={pc} className="relative bg-transparent z-10 max-w-full h-auto" alt="PC"/>
  </div>
</div>

        {/* second section -------->*/}
        <div className='flex flex-col items-center mt-20 ml-40 mr-40'>
          <div>
          <h1 className='text-white text-center font-heading font-bold text-xl'>
            A few services we offer
          </h1>

          <p className='text-white font-heading font-light'>
          Feel free to click on the desired tool to start using it today!!!
          </p>
          </div>

          <div className="p-5 ">
      {/* Grid container */}
      <div className=" relative grid grid-cols-2 gap-14  mb-4 ">
   
        <div className="flex flex-col items-start z-10 justify-around rounded-3xl p-8  bg-[#010D50]  shadow-md">
          <img src={g1} alt="" className="w-12  "/>
          <h className="mt-2 bg-[#010D50] text-white font-heading font-bold">FINANCIAL RECOMMENDER</h>
          <p className="mt-1 bg-[#010D50] text-white font-heading font-light text-sm sm:lg">Input your amount to invest and risk tolerance, and receive a tailored investment plan based on the current market trends</p>
        </div>
        
        <div className="flex flex-col items-start z-10 justify-around rounded-3xl p-8 z-1 bg-[#010D50]  shadow-md">
        
          <img src={g2} alt="" className="w-12 "/>
          <h className="mt-2 bg-[#010D50] text-white font-heading font-bold">FINANCIAL RECOMMENDER</h>
          <p className="mt-1 bg-[#010D50] text-white font-heading font-light text-sm sm:lg">Input your amount to invest and risk tolerance, and receive a tailored investment plan based on the current market trends</p>
        </div>
      </div>
      <img src={glow} className="absolute bg-transparent h-[40rem] w-[40rem] z-0 bottom-[-70%] opacity-45 right-96 mr-30" alt="Glow"/>

      <div className="grid grid-cols-3 gap-14 mt-10  ">
      
        {/* Bottom row with 3 elements */}
        <div className="flex flex-col  items-start justify-around rounded-3xl p-8 z-10 bg-[#010D50]  shadow-md">
       
          <img src={g3} alt="" className="w-12 "/>
          <h className="mt-2 bg-[#010D50] text-white font-heading font-bold">FINANCIAL RECOMMENDER</h>
          <p className="mt-1 bg-[#010D50] text-white font-heading font-light text-sm sm:lg">Input your amount to invest and risk tolerance, and receive a tailored investment plan based on the current market trends</p>
        </div>
        
        <div className="flex flex-col items-start justify-around bg-[#010D50] z-10 rounded-3xl p-8  shadow-md">
          <img src={g4} alt="" className="w-12 "/>
          <h className="mt-2 bg-[#010D50] text-white font-heading font-bold">FINANCIAL RECOMMENDER</h>
          <p className="mt-1 bg-[#010D50] text-white font-heading font-light text-sm sm:lg">Input your amount to invest and risk tolerance, and receive a tailored investment plan based on the current market trends</p>
        </div>
        <div className="flex flex-col items-start justify-around bg-[#010D50] z-10 rounded-3xl p-8  shadow-md">
          <img src={g5} alt="" className="w-12 "/>
          <h className="mt-2 bg-[#010D50] text-white font-heading font-bold">FINANCIAL RECOMMENDER</h>
          <p className="mt-1 bg-[#010D50] text-white font-heading font-light text-sm sm:lg">Input your amount to invest and risk tolerance, and receive a tailored investment plan based on the current market trends</p>
        </div>
      </div>
    </div>
        </div>
 {/* Third section -------->*/}
        <div className='flex justify-between items-center bg-[#0328EE] w-full h-auto mt-20 mb-20'>
        <div className='ml-20 mr-20 bg-[#0328EE]'>
        <h1 className='text-white bg-[#0328EE] font-heading font-bold text-4xl'>
        Explore endless possibilities with PFA your Personalized Financial Assistant
            </h1>
            <p className='text-white bg-[#0328EE] font-heading font-light'>
            The future of investing is here. Are you ready for it?
            </p>
            
            <Link to='/signin' className='inline-block no-underline bg-white py-4 px-8 rounded-full mt-4 text-[#0328EE] font-heading font-bold cursor-pointer shadow-lg transition-all hover:bg-opacity-90'>
                    EXPLORE NOW
                </Link>

        </div>
        
        <div className='flex justify-center items-center mt-10 mb-10'>
        <img src={robo} className='bg-[#0328EE] w-96 h-96' />
        </div>
        </div>

         {/* Fourth section -------->*/}

         <div className='flex justify-around mt-10 ml-20 mr-10'>
          <div className='flex flex-col justify-around gap-4'>
            <h className='text-white font-heading font-bold text-4xl mb-6'>
            Become financially savvy in five easy steps
            </h>
            <div className='flex flex-col gap-5 '>
              <div className='flex gap-3 '>
                <img src={s41} />
                <p className='text-white text-sm font-heading font-light'>Create a free account</p>
              </div>
              
              <div className='flex gap-3'>
                <img src={s42} />
                <p className='text-white  font-heading font-light'>Generate an investment plan</p>
              </div>

              <div className='flex gap-3'>
                <img src={s43} />
                <p className='text-white  font-heading font-light'>Implement the recommedation </p>
              </div>

              <div className='flex gap-3'>
                <img src={s44} />
                <p className='text-white  font-heading font-light'>In case of queries, use the chatbot</p>
              </div>

              <div className='flex gap-3'>
                <img src={s45} />
                <p className='text-white  font-heading font-light'>Enjoy financial independence</p>
              </div>
            </div>
          </div>

          <div className='flex justify-around items-center'> 
          <img src={video} className='h-auto w-auto' />
          </div>

         </div>

          {/* Fifth section -------->*/}

          <div className='mt-40 flex flex-col ml-20 mr-20 '>
            <div className='flex justify-between mb-10 '>
            <h className='text-white font-heading  font-bold text-4xl  mb-6'>
            Browse our latest blogs
            </h>

            <p className='text-white  font-heading  font-light'> These are hand-picked by our domain experts and <br/>  updated constantly.</p>
            </div>

            <div className='flex justify-center items-center overflow-hidden p-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {/* Blog 1 */}
        <div className='flex flex-col rounded-3xl  overflow-hidden'>
          <div className='relative'>
            <img src={investment} alt="Investment" className='  w-full'/>
            <p className='absolute z-10 bottom-[-10%] ml-6 text-white font-heading font-semibold text-sm bg-[#0328EE] p-2 rounded-full'>
              INVESTMENT
            </p>
          </div>
          <div className='flex flex-col items-start top-0 mt-0 bg-[#010D50] p-4 gap-2'>
            <h2 className='text-white font-heading text-xl bg-[#010D50] font-bold'>A Beginner's Guide to Personal Investment</h2>
            <p className='text-white bg-[#010D50] font-heading text-sm'>Designed to help you navigate the complex world of stocks, bonds, and mutual funds</p>
            <div className='flex items-center bg-[#010D50] gap-3 mt-5'>
              <img src={face} alt="Dave Ramsay" className='w-12 h-12 rounded-full'/>
              <div className='bg-[#010D50]'>
                <h3 className='text-white bg-[#010D50] font-heading'>DAVE RAMSAY</h3>
                <p className='text-white bg-[#010D50] font-heading text-sm'>FEB 21, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog 1 */}
        <div className='flex flex-col rounded-3xl  overflow-hidden'>
          <div className='relative'>
            <img src={investment} alt="Investment" className='  w-full'/>
            <p className='absolute z-10  bottom-[-10%] ml-6 text-white font-heading font-semibold text-sm bg-[#0328EE] p-2 rounded-full'>
              INVESTMENT
            </p>
          </div>
          <div className='flex flex-col items-start top-0 mt-0 bg-[#010D50] p-4 gap-2'>
            <h2 className='text-white font-heading text-xl bg-[#010D50] font-bold'>A Beginner's Guide to Personal Investment</h2>
            <p className='text-white bg-[#010D50] font-heading text-sm'>Designed to help you navigate the complex world of stocks, bonds, and mutual funds</p>
            <div className='flex items-center bg-[#010D50] gap-3 mt-5'>
              <img src={face} alt="Dave Ramsay" className='w-12 h-12 rounded-full'/>
              <div className='bg-[#010D50]'>
                <h3 className='text-white bg-[#010D50] font-heading'>DAVE RAMSAY</h3>
                <p className='text-white bg-[#010D50] font-heading text-sm'>FEB 21, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog 1 */}
        <div className='flex flex-col rounded-3xl  overflow-hidden'>
          <div className='relative'>
            <img src={investment} alt="Investment" className='  w-full'/>
            <p className='absolute z-10  bottom-[-10%] ml-6 text-white font-heading font-semibold text-sm bg-[#0328EE] p-2 rounded-full'>
              INVESTMENT
            </p>
          </div>
          <div className='flex flex-col items-start top-0 mt-0 bg-[#010D50] p-4 gap-2'>
            <h2 className='text-white font-heading text-xl bg-[#010D50] font-bold'>A Beginner's Guide to Personal Investment</h2>
            <p className='text-white bg-[#010D50] font-heading text-sm'>Designed to help you navigate the complex world of stocks, bonds, and mutual funds</p>
            <div className='flex items-center bg-[#010D50] gap-3 mt-5'>
              <img src={face} alt="Dave Ramsay" className='w-12 h-12 rounded-full'/>
              <div className='bg-[#010D50]'>
                <h3 className='text-white bg-[#010D50] font-heading'>DAVE RAMSAY</h3>
                <p className='text-white bg-[#010D50] font-heading text-sm'>FEB 21, 2024</p>
              </div>
            </div>
          </div>
        </div>
</div>
</div>
            <div className='mb-30'>
            <Link to='/data' className=' mb-30 flex justify-center items-center ml-96  mr-96 no-underline bg-white p-4 rounded-full mt-10 mb-30 text-[#0328EE] font-heading font-bold cursor-pointer shadow-lg transition-all hover:bg-opacity-90'>
            VIEW ALL ARTICLES                </Link>
            </div>
          </div>
          


          
    </div>
  )
}
