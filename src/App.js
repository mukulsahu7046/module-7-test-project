import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemNumber from './context/itemNumber';

function App() {
  return (
    <div>
      <ItemNumber>
        <Navbar/>
        <Header/>
        <Slider/>
        <Footer/>
      </ItemNumber>
    </div>
  );
}

export default App;
