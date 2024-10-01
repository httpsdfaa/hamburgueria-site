import React, { useState, useEffect } from 'react';

import CardsMin from '../cards/CardsMin'

import '../../styles/Cart.css';

const Cart = ({ id, image, title, price }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const addProduct = (id, image, title, price) => {
            setProducts(prevProducts => [
                ...prevProducts,
                {
                    id: id,
                    image: image,
                    title: title,
                    price: price
                }
            ]);
        }

        addProduct(id, image, title, price)
    }, id, image, title, price)

    return (

        <section className="section-cart flex flex-col h-full w-full z-30 bg-defaultBody" id="section-cart">
            <h1 className='font-yaLike text-defaultBlack'>Meu pedido</h1>

            {/* Checando se o array está vazio
            {productsCart.length === 0 ? <NotProduct />
                : null
            } */}

            {products.map(productItem => (
                <CardsMin
                    key={productItem.id}
                    id={productItem.id}
                />
            ))}
        </section>
    );
}

export default Cart;






