import React, { useState } from 'react';
import './App.css';

// configuração de rota
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// pages
import Header from './pages/Header';
import Background from './pages/Background';
import Carousel from './components/Carousel';
import Footer from './pages/Footer';
import Info from './components/Info';
import Cart from './components/cart/Cart';
import Cards from './components/cards/Cards';
import CardsMin from './components/cards/CardsMin';

function App() {

  // Estados para armazenar valores do Cards (Sandwich e Drinks)
  const [products, setProducts] = useState([]);

  console.log('APPJS: ', products)

  // definindo rotas
  const router = createBrowserRouter([

    {
      path: '/',
      element: (
        <>
          <Header products={products} />
          <main>
            <Background />
            <Info />
            <Carousel />
            <Cards setProducts={setProducts} /> {/* PUXANDO DADOS PARA PASSAR PARA CART*/}
          </main>
          <Footer />
        </>
      )
    },
    {
      path: '/carrinho',
      element: (
        <>
          <Header products={products} />
          <Cart products={products} setProducts={setProducts}/> {/* PEGANDO DADOS DE CARDS*/}
        </>
      )
    }
  ])

  return (
    // Rotas
    <div className="App bg-defaultBody font-libreFranklin text-defaultBlack text-sm w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
