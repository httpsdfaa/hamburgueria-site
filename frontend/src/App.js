import React from 'react';
import './App.css';
// configuração de rota
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// pages
import Header from './pages/Header';
import Background from './pages/Background';
import Body from './pages/Body';
import Footer from './pages/Footer';
import Info from './components/Info';
import Cart from './components/cart/Cart';

// definindo rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Background />
        <Info />
        <Body />
        <Footer />
      </>
    )
  },
  {
    path: '/carrinho',
    element: (
      <>
        <Header />
        <Cart />
      </>
    )
  }
])


function App() {
  return (
    // Rotas
    <div className="App bg-defaultBody font-libreFranklin text-defaultBlack text-sm w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
