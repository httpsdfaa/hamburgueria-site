import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// pages
import Header from './pages/Header';
import Background from './pages/Background';
import Body from './pages/Body';
import Footer from './pages/Footer';
import Info from './components/Info';
import Cart from './components/Cart';

function App() {
  return (
    // Rotas
    <div className="App bg-defaultBody font-libreFranklin text-defaultBlack text-sm w-full">
      <Header />
      <Background />
      <Info />
      <Body />
      <Footer />

      {/* Definicação de rotas */}

      <Routes>
        <Route path="/carrinho" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
