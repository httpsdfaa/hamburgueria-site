import React from 'react';
import './App.css';

// pages
import Header from './pages/Header';
import Background from './pages/Background';
import Body from './pages/Body';
import Footer from './pages/Footer';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Info />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
