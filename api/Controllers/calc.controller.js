
import { errorHandler } from '../Utils/error.js';
import User from '../models/user.model.js'

export const data=async(req,res,next)=>{
    try{
        const { income,name, monthlyExpenditure, riskTolerance } = req.body;
    
        
        const calculatedResults = performCalculations(income, monthlyExpenditure, riskTolerance);
    
        const newUser = new User({ income, name, monthlyExpenditure, riskTolerance, calculatedResults });
        await newUser.save();
    
        res.status(201).json(calculatedResults);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
function performCalculations(income, monthlyExpenditure, riskTolerance) {

  const netIncome = income - (monthlyExpenditure * 12);

  if (netIncome <= 0) {
    throw new Error("Not enough income for investment");
  }

  let sharesPercent, mutualFundsPercent, bondsPercent, savingsPercent;

  switch (riskTolerance) {
    case 'Very high':
      sharesPercent = 50;
      mutualFundsPercent = 30;
      bondsPercent = 10;
      savingsPercent = 10;
      break;
    case 'High':
      sharesPercent = 40;
      mutualFundsPercent = 30;
      bondsPercent = 20;
      savingsPercent = 10;
      break;
    case 'Medium':
      sharesPercent = 30;
      mutualFundsPercent = 30;
      bondsPercent = 30;
      savingsPercent = 10;
      break;
    case 'Low':
      sharesPercent = 20;
      mutualFundsPercent = 30;
      bondsPercent = 40;
      savingsPercent = 10;
      break;
    case 'Very low':
      sharesPercent = 10;
      mutualFundsPercent = 20;
      bondsPercent = 50;
      savingsPercent = 20;
      break;
    default:

      throw new Error("Invalid risk tolerance level");
  }

  return {
    shares: calculatePercentage(netIncome, sharesPercent),
    mutualFunds: calculatePercentage(netIncome, mutualFundsPercent),
    bonds: calculatePercentage(netIncome, bondsPercent),
    savings: calculatePercentage(netIncome, savingsPercent),
  };
}

function calculatePercentage(value, percentage) {
  return (value * percentage) / 100;
}
