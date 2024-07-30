import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Image imports
import pc from '../assets/pc.png';
import glow from '../assets/glow.png';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
import g5 from '../assets/g5.png';
import robo from '../assets/robo.png';
import s41 from '../assets/s4-1.png';
import s42 from '../assets/s4-2.png';
import s43 from '../assets/s4-3.png';
import s44 from '../assets/s4-4.png';
import s45 from '../assets/s4-5.png';
import video from '../assets/video.png';
import investment from '../assets/investment.png';
import debt from '../assets/debt.png';
import credit from '../assets/credit.png';
import face from '../assets/face.png';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  });

  return (
    <div className='flex flex-col w-full overflow-hidden'>
      {/* First section */}
      <div className='flex flex-col lg:flex-row justify-around items-center my-8 px-4 lg:px-40'>
        <div className='flex flex-col mb-10 lg:mb-0' data-aos='fade-right'>
          <h1 className='text-white font-heading font-bold text-3xl lg:text-5xl'>
            Welcome to Personalized Financial Assistant
          </h1>
          <p className='text-white font-heading font-light mt-4'>
            An all-in-one solution integrating personalized recommendations,
            interactive chatbot support, and comprehensive content management for
            enhanced financial literacy.
          </p>
          <Link to='/data' className='no-underline bg-[#0328EE] p-3 w-40 flex items-center justify-center rounded-full mt-4'>
            <li className='text-white list-none bg-[#0328EE] text-sm lg:text-md font-heading font-bold cursor-pointer'>
              Enter Data
            </li>
          </Link>
        </div>

        <div className='relative flex justify-center items-end mt-10 lg:mt-0'>
          <img src={glow} className="absolute top-[-20%] right-32 bg-transparent h-xl w-full opacity-70 z-0" alt="Glow"/>
          <img src={pc} className="relative bg-transparent z-10 h-auto max-w-sm lg:max-w-lg" data-aos='fade-left' alt="PC"/>
        </div>
      </div>

      {/* Second section */}
      <div className='flex flex-col items-center mt-20 px-4 lg:px-40' data-aos='fade-down'>
        <h1 className='text-white text-center font-heading font-bold text-xl'>
          A few services we offer
        </h1>
        <p className='text-white font-heading font-light mt-2'>
          Feel free to click on the desired tool to start using it today!!!
        </p>
        <div className="p-5 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Service cards */}
            {[
              { img: g1, title: "FINANCIAL RECOMMENDER", desc: "Input your amount to invest and risk tolerance, and receive a tailored investment plan based on the current market trends" },
              { img: g2, title: "CHATBOT", desc: "Converse with our in-house chatbot to clarify on any questions you may have, be it from a previous conversation or a new query" },
              { img: g3, title: "EXPENSE TRACKER", desc: "Our tool categorizes your spending into different baskets, offering visual insights into your expenditure pattern" },
              { img: g4, title: "SALARY CALCULATOR", desc: "Calculate your net take-home salary after considering taxes and inflation" },
              { img: g5, title: "NEWSLETTER", desc: "Stay updated with our biweekly newsletter featuring the top 10 financial reads curated by our experts" }
            ].map((service, index) => (
              <div className="flex flex-col items-start justify-around rounded-xl p-8 bg-[#010D50] shadow-md" data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'} key={index}>
                <img src={service.img} alt="" className="w-12"/>
                <h2 className="mt-2 text-white font-heading font-bold">{service.title}</h2>
                <p className="mt-1 text-white font-heading font-light text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className='flex flex-col lg:flex-row justify-between items-center bg-[#0328EE] w-full h-auto mt-20 mb-20 px-4 lg:px-40' data-aos='zoom-in-up'>
        <div className='flex flex-col mb-10 lg:mb-0'>
          <h1 className='text-white font-heading font-bold text-3xl lg:text-4xl'>
            Explore endless possibilities with PFA your Personalized Financial Assistant
          </h1>
          <p className='text-white font-heading font-light mt-4'>
            The future of investing is here. Are you ready for it?
          </p>
          <div className='flex justify-start '>
          <Link to='/signin' className=' no-underline bg-white p-4 rounded-full mt-4 text-[#0328EE] font-heading font-bold cursor-pointer shadow-lg transition-all hover:bg-opacity-90'>
            EXPLORE NOW
          </Link>
          </div>
        </div>
        
        <div className='flex justify-center items-center mt-10 lg:mt-0'>
          <img src={robo} className='w-48 lg:w-96 h-auto' alt="Robo Assistant" />
        </div>
      </div>

      {/* Fourth section */}
      <div className='flex flex-col lg:flex-row justify-around mt-10 px-4 lg:px-20 ml-8 mr-8'>
        <div className='flex flex-col justify-around gap-4'>
          <h className='text-white font-heading font-bold text-2xl lg:text-4xl mb-6' data-aos='fade-down-right'>
            Become financially savvy in five easy steps
          </h>
          <div className='flex flex-col gap-5'>
            {[s41, s42, s43, s44, s45].map((step, index) => (
              <div className='flex gap-3' data-aos='fade-right' key={index}>
                <img src={step} alt={`Step ${index + 1}`} />
                <p className='text-white text-sm font-heading font-light'>Step description {index + 1}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-around items-center mt-10 lg:mt-0'>
          <img src={video} className='h-auto max-w-xs lg:max-w-md' data-aos='fade-left' alt="Introductory Video" />
        </div>
      </div>

      {/* Fifth section */}
      <div className='mt-40 flex flex-col px-4 lg:px-20 ml-8 mr-8'>
        <div className='flex flex-col lg:flex-row justify-between mb-10'>
          <h className='text-white font-heading font-bold text-3xl lg:text-4xl mb-6' data-aos='fade-right'>
            Browse our latest blogs
          </h>
          <p className='text-white font-heading font-light' data-aos='fade-left'>
            These are hand-picked by our domain experts and updated constantly.
          </p>
        </div>

        <div className='flex justify-center items-center overflow-hidden p-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-20'>
            {/* Blog cards */}
            {[
              { img: investment, title: "A Beginner's Guide to Personal Investment", author: "DAVE RAMSAY", date: "FEB 21, 2024" },
              { img: credit, title: "Credit Score 101: Understanding and Improving Your Credit Rating", author: "DAVE RAMSAY", date: "FEB 21, 2024" },
              { img: debt, title: "Debt-Free Living: Strategies to Eliminate Debt Fast", author: "DAVE RAMSAY", date: "FEB 21, 2024" }
            ].map((blog, index) => (
              <div className='flex flex-col rounded-xl overflow-hidden' data-aos={index === 1 ? 'fade-up' : (index === 0 ? 'fade-right' : 'fade-left')} key={index}>
                <div className='relative'>
                  <img src={blog.img} alt={blog.title} className='w-full'/>
                  <p className='absolute bottom-4 left-6 text-white font-heading font-semibold text-sm bg-[#0328EE] p-2 rounded-full'>
                    {blog.title.split(':')[0].toUpperCase()}
                  </p>
                </div>
                <div className='flex flex-col items-start p-4 bg-[#010D50] gap-2'>
                  <h2 className='text-white font-heading text-xl font-bold'>{blog.title}</h2>
                  <p className='text-white font-heading text-sm'>
                    {blog.title.split(': ')[1]}
                  </p>
                  <div className='flex items-center gap-3 mt-5'>
                    <img src={face} alt="Author" className='w-12 h-12 rounded-full'/>
                    <div>
                      <h3 className='text-white font-heading'>{blog.author}</h3>
                      <p className='text-white font-heading text-sm'>{blog.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center mt-10'>
          <Link to='/data' data-aos='zoom-in' className='no-underline bg-white p-4 rounded-full text-[#0328EE] font-heading font-bold cursor-pointer shadow-lg transition-all hover:bg-opacity-90'>
            VIEW ALL ARTICLES
          </Link>
        </div>
      </div>
    </div>
  );
}
