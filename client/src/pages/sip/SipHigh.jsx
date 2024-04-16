import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';
export default function SipHigh() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [futureValue, setFutureValue] = useState(null);
  const [pieData, setPieData] = useState([]);

  // Constants
  const interestRate = 20; // Annual interest rate for low-risk SIP

  const handleCalculate = (e) => {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Convert annual interest rate to monthly and decimal format
    const i = (interestRate / 100) / 12;

    // Total number of payments (months)
    const n = investmentPeriod * 12;

    // SIP formula to calculate future value
    const FV = monthlyInvestment * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));

    setFutureValue(FV);

    // Update pie chart data
    const investedAmount = monthlyInvestment * investmentPeriod * 12;
    const earnings = FV - investedAmount;
    setPieData([
      { title: 'Invested Amount', value: investedAmount, color: '#E38627' },
      { title: 'Earnings', value: earnings, color: '#C13C37' }
    ]);
  };

  // Format the currency value
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
  };
  const handleReset = () => {
    setMonthlyInvestment('');
    setInvestmentPeriod('');
    setFutureValue(null);
    setPieData([]);
  };

  return (
    <>
      
   <Link to='/sipCalculator' className='text-white no-underline font-heading ml-2'>◀️</Link>
    <div className='flex flex-col mt-4 items-center ml-10 mr-10'>
      <h1 className='text-white font-heading tracking-wider'>High RISK</h1>
      <div className='flex w-full mt-10 ml-40 justify-center px-10 gap-40'>
        <div id='form' className='flex flex-col p-10 bg-[#010D50] bg-opacity-50 backdrop-filter backdrop-blur-lg border-2 border-transparent rounded-xl shadow-2xl glass-ui transition duration-500 ease-in-out hover:bg-[#1d164a] hover:bg-opacity-80 flex-basis-[48%]'>
        <h1 className='text-3xl text-center text-white font-bold font-heading my-8'>SIP CALCULATOR</h1>
        <form className='flex flex-col gap-5 p-6' onSubmit={handleCalculate}>
          <div className='flex relative'>
            <input type="number" placeholder='Monthly investment (Rs.)'
              className='border p-4 font-heading shadow-md rounded-lg focus:bg-gray-200 w-full'
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              id='amount' />
          </div>

          <div className='flex relative'>
            <input type="number" placeholder='Investment Period (years)'
              className='border p-4 font-heading shadow-md rounded-lg focus:bg-gray-200 w-full'
              value={investmentPeriod}
              onChange={(e) => setInvestmentPeriod(e.target.value)}
              id='period' />
          </div>

          <button type="submit" className='bg-gray-900 text-white p-2.5 rounded-lg hover:bg-gray-700 disabled:bg-gray-500'>
            CALCULATE
          </button>
          <button type="button" className='bg-red-900 text-white p-2.5 rounded-lg hover:bg-gray-700 disabled:bg-gray-500' onClick={handleReset}>
              RESET
            </button>
        </form>
      </div>


      <div id='res' className='flex flex-col-reverse items-center justify-end gap-10 '>
      {futureValue !== null && (
        <div id='res' className='flex flex-col justify-around gap-10 flex-basis-[48%]'>
          <div className='text-white font-heading font-extralight'>
            <p>Invested Amount: {formatCurrency(monthlyInvestment * investmentPeriod * 12)}</p>
            <p>Est. Returns: {formatCurrency(futureValue - (monthlyInvestment * investmentPeriod * 12))}</p>
            <p>Total: {formatCurrency(futureValue)}</p>
            <p>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(futureValue)} only</p>
          </div> </div>)}

      {futureValue !== null && (
          <div>
        <PieChart
            data={pieData}
            label={({ dataEntry }) => `${dataEntry.title}`}
            labelStyle={{
              fontSize: '4px',
              fontFamily: 'calibri',
              fill: '#fff',
            }}
          />
          </div>
        )}

      </div>
      </div>
     
    </div>
    </>
  );
}
