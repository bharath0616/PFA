import axios from 'axios';

const UPSTOX_API_BASE_URL = 'https://api.upstox.com/v2';
const UPSTOX_API_KEY = process.env.UPSTOX_API_KEY; // Add your Upstox API key to .env
const BEARER_TOKEN = process.env.UPSTOX_ACCESS_TOKEN; // Access token from Upstox authorization

// Function to get the user's current positions
export const getUserPositions = async (req, res, next) => {
  try {
    const response = await axios.get(`${UPSTOX_API_BASE_URL}/portfolio/short-term-positions`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        Accept: 'application/json',
      },
    });
    
    res.status(200).json({
      status: 'success',
      data: response.data.data, // Return the data array
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch portfolio data',
    });
  }
};
