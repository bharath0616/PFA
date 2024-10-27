import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import StockCard from '../components/stockApi/StockCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchStockCard from '../components/stockApi/SearchStockCard';

export default function Stocks() {
  const [trendingStocks, setTrendingStocks] = useState({ top_gainers: [], top_losers: [] });
  const [nseStocks, setNseStocks] = useState([]);
  const [bseStocks, setBseStocks] = useState([]);
  const [searchedStocks, setSearchedStocks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch trending stocks on component mount
  useEffect(() => {
    const fetchTrendingStocks = async () => {
      try {
        const response = await axios.get('/api/stocks/trending');
        setTrendingStocks(response.data.trending_stocks);
      } catch (error) {
        console.error("Error fetching trending stocks:", error);
      }
    };

    const fetchNseStocks = async () => {
      try {
        const response = await axios.get('/api/stocks/nse');
        setNseStocks(response.data);
      } catch (error) {
        console.error("Error fetching NSE stocks:", error);
      }
    };

    const fetchBseStocks = async () => {
      try {
        const response = await axios.get('/api/stocks/bse');
        setBseStocks(response.data);
      } catch (error) {
        console.error("Error fetching BSE stocks:", error);
      }
    };

    fetchTrendingStocks();
    fetchNseStocks();
    fetchBseStocks();
  }, []);

  // Fetch search results
  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchTerm) {
      try {
        const response = await axios.get(`/api/stocks/search?name=${searchTerm}`);
        setSearchedStocks(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (error) {
        console.error("Error searching for stock:", error);
      }
    } else {
      setSearchedStocks([]); // Clear search results if input is empty
    }
  };

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#010D50] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-10">Stock Dashboard</h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex items-center space-x-4 mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a stock..."
            className="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0328EE]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#0328EE] text-white rounded-lg hover:bg-[#031DBF] transition"
          >
            Search
          </button>
        </form>

        {/* Display Searched Stocks */}
        {searchedStocks.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Search Results</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {searchedStocks.map((stock) => (
                <SearchStockCard key={stock.ticker} stock={stock} />
              ))}
            </div>
          </div>
        )}

        {/* Top NSE Stocks */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Top NSE Stocks</h2>
          <Slider {...sliderSettings}>
            {nseStocks.map((stock) => (
              <StockCard key={stock.ticker_id} stock={stock} />
            ))}
          </Slider>
        </div>

        {/* Top BSE Stocks */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Top BSE Stocks</h2>
          <Slider {...sliderSettings}>
            {bseStocks.map((stock) => (
              <StockCard key={stock.ticker_id} stock={stock} />
            ))}
          </Slider>
        </div>

        {/* Trending Stocks */}
        <h2 className="text-2xl font-bold text-white mb-4">Trending Stocks</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-400 mb-4">Top Gainers</h3>
          <Slider {...sliderSettings}>
            {trendingStocks.top_gainers.map((stock) => (
              <StockCard key={stock.ticker_id} stock={stock} />
            ))}
          </Slider>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-red-400 mb-4">Top Losers</h3>
          <Slider {...sliderSettings}>
            {trendingStocks.top_losers.map((stock) => (
              <StockCard key={stock.ticker_id} stock={stock} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
