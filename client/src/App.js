import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Image from './components/Image/Image';

import Body from './components/pages/Body';

function App() {

  const [currentPage, setPage ] = useState('');

  const handlePageChange = (page) => setPage(page);

  return (
      <Router>
        <div className="fullVP">
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          <Image currentPage={currentPage}/>
        </div>
        <Body />
        <Footer />
      </Router>
  );
}

export default App;
