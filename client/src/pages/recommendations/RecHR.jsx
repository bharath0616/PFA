import React, { useEffect, useState } from 'react';
import jyoti from './../../assets/hr/jyoti.jpg';
import zomato from './../../assets/hr/zomato.jpg';
import triveni from './../../assets/hr/triveni.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';

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
        marketCap: '₹ 1,64,445 Cr.',
        stockPE: 'NIL',
        cmp: '₹ 186',
        cagr: '62.3%',
    },
    'TRIVENI ENGINEERING': {
        graph: triveni,
        marketCap: '₹ 7,152 Cr.',
        stockPE: '16.8',
        cmp: '₹ 327',
        cagr: '403%',
    },
};

export default function RecHR() {
    useEffect(() => {
        AOS.init({ duration: 1000, offset: 100 });
    }, []);

    const [selectedStock, setSelectedStock] = useState(null);

    const handleStockSelection = (stockName) => {
        setSelectedStock(stocksData[stockName]);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-20 text-center' data-aos='fade-left'>
                <h1 className='text-white text-4xl font-bold'>
                    RECOMMENDED PICKS
                </h1>
                <p className='text-white text-sm font-extralight'>
                    Here are our recommendations for the <span className='text-[#00FF38]'>High</span> risk level investment selected.<br /> Browse through the options and find associated details below.
                </p>
            </div>

            <div className='flex flex-col lg:flex-row justify-around gap-8 mx-6 lg:mx-24 mt-20'>
                <div className='bg-[#010D50] p-4 lg:p-10 rounded-xl flex-auto' data-aos='fade-right'>
                    <div className='flex'>
                        <div className='text-white py-1 px-3 mt-4 rounded-full bg-[#0328EE] text-xs uppercase font-light'>
                            Top Stocks
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 mt-6'>
                        {Object.keys(stocksData).map(stockName => (
                            <div key={stockName} onClick={() => handleStockSelection(stockName)} className='cursor-pointer'>
                                <h2 className={`text-lg lg:text-xl font-semibold ${selectedStock === stocksData[stockName] ? 'text-white' : 'text-[#7B7676]'}`}>
                                    {stockName}
                                </h2>
                                <hr className="bg-white mb-2" />
                            </div>
                        ))}
                    </div>
                </div>

                {selectedStock && (
                    <div className='rounded-lg overflow-hidden flex-grow' style={{ minHeight: '300px' }} data-aos='fade-left'>
                        <img src={selectedStock.graph} alt={`${selectedStock} Graphical Representation`} className="w-full h-full"/>
                    </div>
                )}
            </div>

            {selectedStock && (
                <div className="text-white mt-10 mx-10 lg:mx-40 p-6" data-aos='fade-up'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <span className="font-semibold">Market Cap - {selectedStock.marketCap}</span>
                            <span className="font-semibold">Stock P/E - {selectedStock.stockPE}</span>
                        </div>
                        <div>
                            <span className="font-semibold">CMP - {selectedStock.cmp}</span>
                            <span className="font-semibold">CAGR - {selectedStock.cagr} (5 Years)</span>
                        </div>
                    </div>
                </div>
            )}

            <div className='text-white font-extralight text-xs mt-20 text-center'>
                <i>All information provided is as-per financial industry experts. However, ensure to read all scheme related information carefully and conclusively.</i>
            </div>
        </div>
    );
}
