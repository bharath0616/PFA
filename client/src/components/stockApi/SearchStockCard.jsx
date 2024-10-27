import React from 'react';

export default function SearchStockCard({ stock }) {
  if (!stock) return null;

  // Destructure key properties with default fallbacks
  const {
    companyName = 'N/A',
    industry = 'N/A',
    currentPrice = {},
    percentChange = 'N/A',
    yearHigh = 'N/A',
    yearLow = 'N/A',
    companyProfile = {},
    recentNews = [],
    peerCompanyList = []
  } = stock;

  // Select key financial metrics from peerCompanyList if available
  const financialData = peerCompanyList.length > 0 ? peerCompanyList[0] : {};

  return (
    <div className="p-6 bg-[#080d2a] rounded-2xl shadow-lg hover:shadow-2xl transition text-white w-72">
      <div className="flex items-center space-x-3 mb-4">
        {/* Placeholder for Company Logo */}
        <div className="bg-[#010D50] w-12 h-12 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-white">
            {companyName[0]}
          </span>
        </div>
        <div>
          <h2 className="text-lg font-bold">{companyName}</h2>
          <p className="text-sm text-gray-400">{industry}</p>
        </div>
      </div>

      {/* Stock Price and Percent Change */}
      <div className="text-xl font-bold mb-1">
        ₹{currentPrice.BSE || 'N/A'} (BSE) | ₹{currentPrice.NSE || 'N/A'} (NSE)
      </div>
      <div className={`text-md font-semibold ${percentChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
        {percentChange > 0 ? '+' : ''}{percentChange}% ({financialData.netChange || 'N/A'})
      </div>
      <div className="text-gray-300 text-sm mt-2">
        52-Week High: ₹{yearHigh} | Low: ₹{yearLow}
      </div>

      {/* Key Financial Highlights */}
      <h3 className="mt-4 text-md font-semibold text-gray-200">Key Financial Highlights</h3>
      <ul className="text-sm text-gray-300">
        <li>Market Cap: ₹{financialData.marketCap ? `${financialData.marketCap} Cr` : 'N/A'}</li>
        <li>Price to Book: {financialData.priceToBookValueRatio ?? 'N/A'}</li>
        <li>P/E Ratio: {financialData.priceToEarningsValueRatio ?? 'N/A'}</li>
        <li>ROE (5-Year Avg): {financialData.returnOnAverageEquity5YearAverage !== undefined ? `${financialData.returnOnAverageEquity5YearAverage}%` : 'N/A'}</li>
        <li>Net Profit Margin: {financialData.netProfitMarginPercentTrailing12Month !== undefined ? `${financialData.netProfitMarginPercentTrailing12Month}%` : 'N/A'}</li>
      </ul>

      {/* Recent News */}
      <h3 className="mt-4 text-md font-semibold text-gray-200">Recent News</h3>
      <ul className="text-sm text-blue-300">
        {recentNews.slice(0, 3).map((news) => (
          <li key={news.id} className="mt-1">
            <a href={news.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {news.headline}
            </a>
            <p className="text-xs text-gray-500">{news.date} - {news.timeToRead} min read</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
