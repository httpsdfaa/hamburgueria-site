import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
    return (
        <section className="section-cart flex h-full w-full z-30 bg-defaultBody" id="section-cart">
            <h1>Meu pedido</h1>
            <div className="not-product">
                <h4>Nenhum produto</h4>
                <Link to='/'>Voltar para o início</Link>
            </div>
        </section>
    );
}

export default Cart;