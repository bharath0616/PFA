import React from 'react'
import { Link } from 'react-router-dom'
import salary from '../assets/salary.png'
import sip from '../assets/sip.png'
import glow from '../assets/glow.png'
import tax from '../assets/tax.png'
import portfolio from '../assets/portfolio.png'
export default function Tools() {
  return (
    
    <div className='mt-20 relative z-10'>
    <img src={glow} className="absolute top-32 left-[-60%] bg-transparent h-full rounded-full w-full opacity-70 z-[-1]" alt="Glow"/>
      <div className='flex flex-col gap-2 ml-80 mr-80 justify-center relative items-center'> 
        <h className='text-white text-4xl font-heading font-bold'>
        PFA TOOLS
        </h>
        <p className='text-white text-lg font-heading font-light text-center'>
        Based on the collected data we provide personalized financial recommendations such as salary breakdown, investment options, etc. The website will also include supplementary financial tools like salary take-home calculator, and investment return calculator.
        </p>
      </div>

{/*section----->2 */}

      <div className='flex flex-col justify-center items-start '>
      
      <h className='text-white text-xl font-heading font-bold mb-10 ml-40 mt-20'>
      What drives a financially smart individual?
      </h>
<div className='flex flex-col gap-4 ml-40 mr-40'>
      <div className='flex justify-around gap-8 '>
      <div className='w-1/2 p-4'>
        <Link to='/data' className='flex bg-[#010D50] p-6
         no-underline rounded-3xl justify-center gap-4'>
            <div>
            <img src={salary} className='rounded-lg'/>
            </div>
            <div className='flex flex-col justify-center '>
              <h className='text-white font-heading font-semibold text-sm'>SALARY BREAKDOWN</h>
              <p className='text-white font-heading font-light text-sm '>Understand how to spend your take-home pay with our clear breakdown of the suggestions as per your data.</p>
            </div>
        </Link>
        </div>

        <div className='w-1/2 p-4'>
        <Link to='/sipCalculator' className='flex bg-[#010D50] p-6 no-underline 
        rounded-3xl justify-center gap-4'>
            <div>
            <img src={sip} className='rounded-lg'/>
            </div>
            <div className='flex flex-col justify-center '>
              <h className='text-white font-heading font-semibold text-sm'>SIP CALCULATOR</h>
              <p className='text-white font-heading font-light text-sm '>
              Plan your future with our SIP calculator. Estimate returns and achieve your financial goals through Systematic Investment Plans.
              </p>
            </div>
        </Link>
        </div>
</div>

<div className='flex justify-around gap-8'>
<div className='w-1/2 p-4'>
<Link to='/portfolioManager' className='flex bg-[#010D50] p-6 no-underline rounded-3xl 
justify-center gap-4'>
            <div>
            <img src={portfolio} className='rounded-lg'/>
            </div>
            <div className='flex flex-col justify-center '>
              <h className='text-white font-heading font-semibold text-sm'>PORTFOLIO MANAGER</h>
              <p className='text-white font-heading font-light text-sm '>
              Track your investments, analyze performance, and make informed decisions with our comprehensive portfolio management tool.</p>
            </div>
        </Link>
        </div>

        <div className='w-1/2 p-4'>
        <Link to='/taxCalculator' className='flex bg-[#010D50] p-6 no-underline
         rounded-3xl justify-center gap-4'>
            <div>
            <img src={tax} className='rounded-lg'/>
            </div>
            <div className='flex flex-col justify-center '>
              <h className='text-white font-heading font-semibold text-sm '>TAX CALCULATOR</h>
              <p className='text-white font-heading font-light text-sm '>
              Stay on top of your taxes. Estimate your tax liability and explore tax-saving options with our user-friendly tax calculator.</p>
            </div>
        </Link>
        </div>
        </div>
</div>
      </div>
    </div>
  )
}
