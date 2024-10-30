import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrUpdateStock, fetchHoldings } from '../../redux/holdings/holdingsSlice';
import toast, { Toaster } from 'react-hot-toast';
export default function SearchStockCard({ stock, userId }) {
  if (!stock) return null;

  const {
    companyName = 'N/A',
    industry = 'N/A',
    currentPrice = {},
    percentChange = 'N/A',
    yearHigh = 'N/A',
    yearLow = 'N/A',
    recentNews = [],
    peerCompanyList = []
  } = stock;

  const financialData = peerCompanyList.length > 0 ? peerCompanyList[0] : {};
  const dispatch = useDispatch();
  const holdings = useSelector((state) => state.holdings.holdings);
  const holding = holdings.find((item) => item.name === companyName);
  const quantity = holding ? holding.quantity : 0;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchasePrice, setPurchasePrice] = useState('');
  const [inputQuantity, setInputQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchHoldings(userId));
  }, [dispatch, userId]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleAddToHoldings = () => {
    if (purchasePrice && inputQuantity > 0) {
      dispatch(addOrUpdateStock({
        userId,
        stockName: companyName,
        quantity: inputQuantity,
        purchasePrice: parseFloat(purchasePrice),
      }))
        .then(() => {
          toast.success('Stock added to holdings successfully!');
          handleCloseModal();
        })
        .catch(() => {
          toast.error('Failed to add stock to holdings.');
        });
    } else {
      toast.error('Please enter a valid purchase price and quantity.');
    }
  };

  return (
    <div className="p-6 bg-[#080d2a] rounded-2xl shadow-lg hover:shadow-2xl transition text-white w-72">
       <Toaster/>
      <div className="flex items-center space-x-3 mb-4">
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

      <div className="text-xl font-bold mb-1">
        ₹{currentPrice.BSE || 'N/A'} (BSE) | ₹{currentPrice.NSE || 'N/A'} (NSE)
      </div>
      <div className={`text-md font-semibold ${percentChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
        {percentChange > 0 ? '+' : ''}{percentChange}% ({financialData.netChange || 'N/A'})
      </div>
      <div className="text-gray-300 text-sm mt-2">
        52-Week High: ₹{yearHigh} | Low: ₹{yearLow}
      </div>

      <h3 className="mt-4 text-md font-semibold text-gray-200">Key Financial Highlights</h3>
      <ul className="text-sm text-gray-300">
        <li>Market Cap: ₹{financialData.marketCap ? `${financialData.marketCap} Cr` : 'N/A'}</li>
        <li>Price to Book: {financialData.priceToBookValueRatio ?? 'N/A'}</li>
        <li>P/E Ratio: {financialData.priceToEarningsValueRatio ?? 'N/A'}</li>
        <li>ROE (5-Year Avg): {financialData.returnOnAverageEquity5YearAverage !== undefined ? `${financialData.returnOnAverageEquity5YearAverage}%` : 'N/A'}</li>
        <li>Net Profit Margin: {financialData.netProfitMarginPercentTrailing12Month !== undefined ? `${financialData.netProfitMarginPercentTrailing12Month}%` : 'N/A'}</li>
      </ul>

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

      {quantity === 0 ? (
        <button onClick={handleOpenModal} className="mt-4 bg-blue-500 text-white p-2 rounded w-full">
          Add to Holdings
        </button>
      ) : (
        <span className="mt-4 block text-lg text-center">{quantity} shares in holdings</span>
      )}

      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-6 w-80 transform transition-all ease-out duration-300 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">Add Stock to Holdings</h2>
      <label className="block mb-2">
        Purchase Price:
        <input
          type="number"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
          className="border rounded w-full p-2"
        />
      </label>
      <label className="block mb-4">
        Quantity:
        <input
          type="number"
          min="1"
          value={inputQuantity}
          onChange={(e) => setInputQuantity(Number(e.target.value))}
          className="border rounded w-full p-2"
        />
      </label>
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleCloseModal}
          className="px-4 py-2 bg-gray-500 text-white rounded transition duration-200 hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={handleAddToHoldings}
          className="px-4 py-2 bg-blue-500 text-white rounded transition duration-200 hover:bg-blue-600"
        >
          Add Stock
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
