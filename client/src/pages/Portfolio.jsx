import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHoldings, addOrUpdateStock, removeStock } from '../redux/holdings/holdingsSlice';

export default function Portfolio() {
  const userId = useSelector((state) => state.user.currentUser?._id) || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const { holdings, totalValue = 0, investedValue = 0, loading, error } = useSelector((state) => state.holdings);

  useEffect(() => {
    dispatch(fetchHoldings(userId));
  }, [dispatch, userId]);

  const handleIncreaseQuantity = (stockName) => {
    dispatch(addOrUpdateStock(userId, stockName, 1));
  };

  const handleDecreaseQuantity = (stockName) => {
    dispatch(addOrUpdateStock(userId, stockName, -1));
  };

  const handleRemoveStock = (stockName) => {
    dispatch(removeStock(userId, stockName));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const difference = totalValue - investedValue;
  const differenceColor = difference >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <div className="p-8">
      <div className="bg-dark p-6 rounded-lg shadow-lg text-white mb-8">
        <h1 className="text-5xl font-semibold">₹{totalValue ? totalValue.toLocaleString() : '0'}</h1>
        <p className="text-lg font-medium text-gray-400">Current Value</p>
        <p className="text-lg font-medium text-gray-400 mt-2">
          Invested Value: ₹{investedValue ? investedValue.toLocaleString() : '0'}
        </p>
        <p className={`text-lg font-medium ${differenceColor} mt-2`}>
          Difference: ₹{difference ? difference.toLocaleString() : '0'} ({investedValue ? ((difference / investedValue) * 100).toFixed(2) : 0}%)
        </p>
      </div>

      <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center pb-4 border-b border-gray-700 mb-4">
          <h2 className="text-xl font-semibold text-white">Holdings ({holdings.length})</h2>
        </div>

        {holdings.map((stock) => {
          const investedAmount = stock.investedAmount || (stock.purchasePrice * stock.quantity);

          return (
            <div
              key={stock.name}
              className="bg-gray-800 text-white p-4 rounded-lg mb-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold">{stock.name}</h3>
                <p className="text-sm text-gray-400">
                  {stock.quantity || 0} shares • Avg Buy Price: ₹{(investedAmount / (stock.quantity || 1)).toLocaleString() || 'N/A'}
                </p>
                <p className="text-sm font-medium mt-1">
                  MKT Price: BSE: ₹{stock.currentPrice?.BSE || 'N/A'}, NSE: ₹{stock.currentPrice?.NSE || 'N/A'}
                </p>
                <p className="text-sm font-medium mt-1">
                  Invested Amount: ₹{(investedAmount || 0).toLocaleString()}
                </p>
                <p className="text-sm font-medium mt-1">
                  Current Value: ₹{stock.currentValue ? stock.currentValue.toLocaleString() : 'N/A'}
                </p>
                <p className={`text-sm font-medium mt-1 ${stock.currentValue - investedAmount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  Difference: ₹{((stock.currentValue || 0) - (investedAmount || 0)).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-green-600 text-white font-bold px-3 py-1 rounded"
                  onClick={() => handleIncreaseQuantity(stock.name)}
                >
                  +
                </button>
                <button
                  className="bg-yellow-500 text-white font-bold px-3 py-1 rounded"
                  onClick={() => handleDecreaseQuantity(stock.name)}
                  disabled={(stock.quantity || 0) <= 1}
                >
                  -
                </button>
                <button
                  className="bg-red-500 text-white font-bold px-3 py-1 rounded"
                  onClick={() => handleRemoveStock(stock.name)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
