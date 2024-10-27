import React from 'react';

export default function StockCard({ stock }) {
  return (
    <div className="p-4 bg-[#080d2a] rounded-2xl shadow-lg hover:shadow-2xl transition w-56 h-52 text-white">
      <div className="flex items-center space-x-3 mb-4">
        {/* Placeholder for Company Logo */}
        <div className="bg-[#010D50] w-10 h-10 rounded-full flex items-center justify-center">
          <span className="text-lg font-bold text-white">
            {stock.company_name ? stock.company_name[0] : stock.company[0]}
          </span>
        </div>
        <div>
          <h3 className="text-md font-semibold">
            {stock.company_name || stock.company}
          </h3>
        </div>
      </div>
      <div className="text-xl font-bold mb-2">
        ₹{stock.price}
      </div>
      <div className={`text-md font-semibold ${stock.percent_change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
        {stock.percent_change > 0 ? '+' : ''}{stock.percent_change}% ({stock.net_change})
      </div>
      <div className="text-gray-300 text-sm mt-2">
        High: ₹{stock.high} | Low: ₹{stock.low}
      </div>
      <div className="text-gray-300 text-sm">Volume: {Number(stock.volume).toLocaleString()}</div>
    </div>
  );
}
