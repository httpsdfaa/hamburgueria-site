import React, { useEffect, useState } from 'react';
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
import Cards from './components/cards/Cards';
import CardsMin from './components/cards/CardsMin';

function App() {

  // Estados para armazenar valores do Cards (Sandwich e Drinks)
  const [products, setProducts] = useState([]);

  useEffect(() => {// LOCAL STORAGE
    localStorage.setItem('cart', JSON.stringify(products))
  }, [products])

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
            <Cards setProducts={setProducts} products={products}/> {/* PUXANDO DADOS PARA PASSAR PARA CART*/}
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
          <CardsMin products={products} setProducts={setProducts}/> {/* PEGANDO DADOS DE CARDS*/}
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
