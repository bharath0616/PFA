  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Header from './components/Header';
  import Blog from './pages/Blog';
  import Home from './pages/Home';
import Tools from './pages/Tools';
import DataEntry from './pages/DataEntry';
import SalaryBreakdown from './pages/SalaryBreakdown';
import SipCalculator from './pages/SipCalculator';
import TaxCalculator from './pages/TaxCalculator';
import PortfolioManager from './pages/PortfolioManager';
import Footer from './components/Footer';
import SipLow from './pages/sip/SipLow';
import SipMedium from './pages/sip/SipMedium';
import SipHigh from './pages/sip/SipHigh';
import TaxLow from './pages/tax/TaxLow';
import TaxMedium from './pages/tax/TaxMedium';
import TaxHigh from './pages/tax/TaxHigh';
import Recommend from './pages/Recommend';
import RecLR from './pages/recommendations/RecLR.jsx';
import RecHR from './pages/recommendations/RecHR';
import RecMR from './pages/recommendations/RecMR';



  export default function App() {
    return (  
      <Router>
      <Header/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/data' element={<DataEntry/>} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/recommend' element={<Recommend />} />
        <Route path='/recommendations-lr' element={<RecLR />} />
        <Route path='/recommendations-hr' element={<RecHR />} />
        <Route path='/recommendations-mr' element={<RecMR />} />
        <Route path='/salarBreakdown' element={<SalaryBreakdown />} />
        <Route path='/sipCalculator' element={<SipCalculator />} />
        <Route path='/taxCalculator' element={<TaxCalculator />} />
        <Route path='/portfolioManager' element={<PortfolioManager />} />
        <Route path='/siplow' element={<SipLow />} />
        <Route path='/sipmedium' element={<SipMedium />} />
        <Route path='/siphigh' element={<SipHigh />} />
        <Route path='/taxlow' element={<TaxLow />} />
        <Route path='/taxmedium' element={<TaxMedium />} />
        <Route path='/taxhigh' element={<TaxHigh />} />
        </Routes>
        <Footer/>
      </Router>
    ) 
  }

