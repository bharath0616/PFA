  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Header from './components/Header';
  import Blog from './pages/Blog';
  import Home from './pages/Home';
import Tools from './pages/Tools';


  export default function App() {
    return (  
      <Router>
      <Header/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/tools' element={<Tools />} />
        </Routes>
      </Router>
    ) 
  }

