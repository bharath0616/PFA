import React, { useState } from 'react'
import jyoti from './../../assets/hr/jyoti.jpg'
import zomato from './../../assets/hr/zomato.jpg'
import triveni from './../../assets/hr/triveni.jpg'
const stocksData = {
    'JYOTI RESINS': {
      graph: jyoti, 
      marketCap: '₹ 1,611 Cr.',
      stockPE: '24.9',
      cmp: '₹ 1,343',
      cagr: '2,386%',
    },
    'ZOMATO': {
      graph: zomato, 
      marketCap:'₹ 1,64,445 Cr.',
      stockPE:'NIL',
      cmp:'₹ 186',
      cagr: '62.3%',
    },
    'TRIVENI ENGINEERING': {
        graph: triveni, 
        marketCap:'₹ 7,152 Cr.',
        stockPE:'16.8',
        cmp:'₹ 327',
        cagr: '403%',
      },
   
  };  
export default function RecHR() {
    const [selectedStock, setSelectedStock] = useState(null);

  const selectStock = (stockName) => {
    setSelectedStock(stockName);
  }
  const handleStockSelection = (stockName) => {
    setSelectedStock(stocksData[stockName]);
  }
  return (
    <div className='flex flex-col justify-center items-stretch'>
    <div className='flex flex-col justify-center items-center mt-20'>
      <h className='text-white font-heading text-4xl font-bold'>
        RECOMMENDED PICKS
      </h>
      <p className='text-white font-heading text-sm font-extralight text-center'>
        Here are our recommendations for the <span className='text-[#00FF38]'>High</span> risk level<br/> investment selected. 
        Browse through the options<br/>and find associated details below.
      </p>
    </div>

    <div className='flex justify-around gap-8 ml-24 mr-24 mt-20'>
      <div id='content' className='bg-[#010D50] p-10 rounded-xl' style={{ flexBasis: '30%' }}>
    <div className='flex'><div className='text-white font-heading py-1  px-3 mt-4 rounded-full bg-[#0328EE] text-xs uppercase font-light'>
          <p>Top Stocks</p>
        </div></div>
        <div className='flex flex-col gap-4 mt-6'>
          {Object.keys(stocksData).map(stockName => (
            <div key={stockName} onClick={() => handleStockSelection(stockName)}>
            <h className={`text-lg lg:xl font-heading cursor-pointer ${selectedStock && selectedStock === stocksData[stockName] ? 'text-white' : 'text-[#7B7676]'}`}>
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
        <div className="grid grid-cols-2 gap-4">
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
