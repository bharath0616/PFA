import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataStart, dataSuccess, dataFailure, resetData } from '../redux/user/userSlice';
import { PieChart } from 'react-minimal-pie-chart';
export default function DataEntry() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
 
  const { loading, error, data: results } = useSelector((state) => state.user);
  
  useEffect(() => {
    dispatch(resetData());
  }, [dispatch]);
 
 const totalInvested = results 
    ? results.shares + results.mutualFunds + results.bonds + results.savings
    : 0;

  // Get percentage for the pie chart labels
  const getPercentage = (value) => (value / totalInvested) * 100;
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(dataStart());
    try {
      const response = await fetch('/api/auth/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(dataSuccess(data));
      } else {
        dispatch(dataFailure(data.message));
      }
    } catch (error) {
      dispatch(dataFailure(error.toString()));
    }
  };
  const radius = 50; 
  const labelPosition = 60; 
  const pieChartData = results ? [
    { title: 'Shares', value: getPercentage(results.shares), color: '#E38627' },
    { title: 'Mutual Funds', value: getPercentage(results.mutualFunds), color: '#C13C37' },
    { title: 'Bonds', value: getPercentage(results.bonds), color: '#6A2135' },
    { title: 'Savings', value: getPercentage(results.savings), color: '#3DA5D9' },
  ] : [];


  return (
    <div className='ml-20 mr-20 mt-20'>
      <h className='text-white font-bold font-heading text-5xl tracking-tight mb-20'>
        Let’s Build Your Investment Blueprint!
      </h>
      <p className='text-white font-heading text-md mt-8'>
        Please enter the following details for us to generate you an investment plan that fits your needs.
      </p>

      <form className='flex flex-col mt-20 gap-5 p-6' onSubmit={handleSubmit}>
        <div className='flex justify-between items-stretch gap-60'>
          <div className='flex flex-col gap-2 relative justify-center'>
            <h className='text-white font-heading  ml-2 text-md'>Income</h>
            <input type="number" className='border p-4 bg-[#010D50] border-transparent shadow-md rounded-full text-white w-60 '
              id='income' autoComplete='income' onChange={handleChange} />
            <p className='text-white font-heading font-bold text-md'>
              Enter your annual cash inflow from<br /> all sources including salary, rental <br />yield, passive incomes
            </p>
          </div>
          <div className='flex flex-col relative gap-2'>
            <h className='text-white font-heading  ml-2'>Monthly Expense</h>
            <input type="number" className='border p-4 bg-[#010D50] shadow-md border-transparent rounded-full text-white w-60 '
              id='monthlyExpenditure' autoComplete='monthlyExpenditure' onChange={handleChange} />
            <p className='text-white font-heading font-bold text-md'>
              Input your estimated annual fixed costs.<br /> The difference of these two inputs will<br /> be used for giving investment recommendations.
            </p>
          </div>
        </div>

        <div className=' ml-96 mr-96 mt-10 flex flex-col items-stretch gap-2 justify-center relative'>
          <h className='text-white text-left font-heading ml-2 '>Risk Tolerance</h>
          <select className='border p-4 bg-[#010D50] border-transparent shadow-md rounded-full
           text-white w-60 '
            id='riskTolerance'  autoComplete='riskTolerance' onChange={handleChange}>
            <option value="" disabled>Select your risk tolerance</option>
            <option>Very high</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
            <option>Very low</option>
          </select>
          <p className='text-white font-heading font-bold text-md'>
            Provide risk appetite. Remember, the greater the risk, the greater the returns
          </p>
        </div>
        <div className='flex mt-10 justify-center items-center'>
          <button type="submit" className='bg-[#686363] text-white font-heading p-3 rounded-full border-transparent
         hover:bg-gray-700 disabled:bg-gray-500 text-xs uppercase '>
            Generate Plan
          </button>
        </div>
      </form>
      {error && <p className='text-red-700 mt-6'>{error}</p>}
      {results && (
        <div className='flex justify-around gap-4 mt-10'>
        <div className='mt-6 text-white'>
          <h2 className='text-xl font-heading font-bold'>As per your requirements, the following <br/>investment distribution would be optimal-
          </h2>
          <p className='text-white font-heading font-light'>Mutual Funds: {results.mutualFunds} ({getPercentage(results.mutualFunds)}%)</p>
            <p className='text-white font-heading font-light'>Shares: {results.shares} ({getPercentage(results.shares)}%)</p>
            <p className='text-white font-heading font-light'>Savings: {results.savings} ({getPercentage(results.savings)}%)</p>
            <p className='text-white font-heading font-light'>Bonds: {results.bonds} ({getPercentage(results.bonds)}%)</p>
        </div>
        <div className='flex justify-center items-center w-md'>
        <PieChart
  data={pieChartData}
  label={({ dataEntry }) => `${Math.round(dataEntry.value)}%`} 
  labelStyle={{
    fontSize: '5px',
    fontFamily: 'sans-serif',
    fill: '#fff',
  }}
  radius={radius}
  labelPosition={labelPosition}
/>
        </div>
        </div>
      )}
      
    </div>
  );
}
