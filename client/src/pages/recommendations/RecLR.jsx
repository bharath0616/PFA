import React, { useEffect, useState } from 'react'
import tcs from './../../assets/lr/tcs.jpg'
import hdfcbank from './../../assets/lr/hdfc.jpg'
import hul from './../../assets/lr/hul.jpg'
import ril from './../../assets/lr/reliance.jpg'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
const stocksData = {
    'TCS': {
      graph: tcs, 
      marketCap: '₹ 13,84,353 Cr.',
      stockPE: '29.7',
      cmp: '₹ 3,826',
      cagr: '23.03%',
    },
    'HDFC Bank': {
      graph: hdfcbank, 
      marketCap:'₹ 11,63,315 Cr.',
      stockPE:'18.2',
      cmp:'₹ 1531',
      cagr: '-8.25%',
    },
    'HUL': {
        graph: hul, 
        marketCap:'₹ 5,24,335 Cr.',
        stockPE:'50.8',
        cmp:'₹ 2,232',
        cagr: '-6.63%',
      },
    'Reliance Industries': {
        graph: ril, 
        marketCap:'₹ 19,89,282 Cr.',
        stockPE:'28.5',
        cmp:'₹ 2,940',
        cagr: '25.28%',
      },
   
  };  
export default function RecLR() {
  useEffect(()=>{
    AOS.init({duration:1000, offset:100})
  })
    const [selectedStock, setSelectedStock] = useState(null);

  const selectStock = (stockName) => {
    setSelectedStock(stockName);
  }
  const handleStockSelection = (stockName) => {
    setSelectedStock(stocksData[stockName]);
  }
  return (
    <div className='flex flex-col justify-center items-stretch'>
    <div className='flex flex-col justify-center items-center mt-20' data-aos='fade-right'>
      <h className='text-white font-heading text-4xl font-bold'>
        RECOMMENDED PICKS
      </h>
      <p className='text-white font-heading text-sm font-extralight text-center'>
        Here are our recommendations for the <span className='text-[#00FF38]'>Low</span> risk level<br/> investment selected. 
        Browse through the options<br/>and find associated details below.
      </p>
    </div>

    <div className='flex justify-around gap-8 ml-24 mr-24 mt-20'>
      <div id='content' className='bg-[#010D50] p-10 rounded-xl' style={{ flexBasis: '30%' }} data-aos='fade-left'>
    <div className='flex'><div className='text-white font-heading py-1  px-3 mt-4 rounded-full bg-[#0328EE] text-xs uppercase font-light'>
          <p>Top Stocks</p>
        </div></div>
        <div className='flex flex-col gap-4 mt-6'>
          {Object.keys(stocksData).map(stockName => (
            <div key={stockName} onClick={() => handleStockSelection(stockName)}>
            <h className={`text-lg lg:xl font-heading cursor-pointer ${selectedStock && selectedStock === stocksData[stockName] ? 'text-white' : 'text-[#7B7676]'}`}data-aos='fade-left'>
                {stockName}
              </h>
              <hr className="bg-white mb-2" />
            </div>
          ))}
        </div>
      </div>

      <div id='graph' className='rounded-lg overflow-hidden' style={{ flexGrow: 1, flexBasis: '100%', maxWidth: '100%' }}>
          {selectedStock && (
            <img src={selectedStock.graph} alt={`${selectedStock} Graphical Representation`} className="w-full h-full  " />
          )}
        </div>
    </div>

    {selectedStock && (
      <div className="text-white font-heading font-semibold mt-10 ml-40 p-6">
        <div className="grid grid-cols-2 gap-4" data-aos='fade-up'>
          <div className="flex flex-col gap-4 justify-start">
            <span className="font-semibold">Market Cap - {selectedStock.marketCap}</span>
            <span className="font-semibold">Stock P/E - {selectedStock.stockPE}</span>
          </div>
          <div className="flex flex-col gap-4 justify-start">
            <span className="font-semibold">CMP - {selectedStock.cmp}</span>
            <span className="font-semibold">CAGR - {selectedStock.cagr} (5 Years)</span>
          </div>
        </div>
      </div>
    )}

    <div className='text-white font-heading font-extralight text-xs mt-20 flex justify-center'>
      <i>All information provided is as-per financial industry experts. However, ensure to read all scheme related information carefully and conclusively.</i>
    </div>
  </div>
      )
    }
