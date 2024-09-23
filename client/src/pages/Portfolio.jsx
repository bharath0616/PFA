import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Portfolio(){
    const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get('/api/portfolio/positions');
        setPositions(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch portfolio');
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Your Portfolio</h1>
      <table>
        <thead>
          <tr>
            <th>Trading Symbol</th>
            <th>Exchange</th>
            <th>Quantity</th>
            <th>Last Price</th>
            <th>PnL</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position, index) => (
            <tr key={index}>
              <td>{position.tradingsymbol}</td>
              <td>{position.exchange}</td>
              <td>{position.quantity}</td>
              <td>{position.last_price}</td>
              <td>{position.pnl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};  
}