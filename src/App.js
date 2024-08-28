import React from 'react';
import './App.css';

// pages
import Header from './pages/Header';
import Background from './pages/Background';
import Body from './pages/Body';
import Footer from './pages/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
