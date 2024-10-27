import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockCard from '../components/stockApi/StockCard';
import StockChart from '../components/stockApi/StockChart';

const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStock, setSelectedStock] = useState(null);

  // Fetch trending stocks (top gainers and losers) on initial load
  useEffect(() => {
    const fetchTrendingStocks = async () => {
      try {
        const response = await axios.get('/api/trending-stocks');
        const { trending_stocks } = response.data;
        const combinedStocks = [
          ...trending_stocks.top_gainers,
          ...trending_stocks.top_losers,
        ];
        setStocks(combinedStocks);
      } catch (error) {
        console.error("Error fetching trending stocks:", error);
      }
    };
    fetchTrendingStocks();
  }, []);

  // Handle stock search when form is submitted
  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchTerm) {
      try {
        const response = await axios.get(`/api/search-stock?name=${searchTerm}`);
        setStocks(response.data); // Update stocks based on search result
      } catch (error) {
        console.error("Error searching for stock:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Stock Dashboard</h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex items-center space-x-4 mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a stock..."
            className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        {/* Stock Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <StockCard stocks={stocks} onSelectStock={setSelectedStock} />
        </div>

        {/* Stock Detail */}
        {selectedStock && (
          <div className="mt-10">
            <StockChart stock={selectedStock} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Stocks;
