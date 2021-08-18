import React from 'react';

import Navbar from './components/Navbar';
import Home from './sections/Home';
import ImagesSection from './sections/ImagesSection'
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Home/>
      <ImagesSection/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
