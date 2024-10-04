import React from 'react';

import CardsMin from '../cards/CardsMin';
import NotProduct from '../cart/NotProduct'

import '../../styles/Cart.css';

const Cart = ({ products }) => {

    return (

        <section className="section-cart flex flex-col h-full w-full z-30 bg-defaultBody" id="section-cart">
            <h1 className='font-yaLike text-defaultBlack'>Meu pedido</h1>
            

            {
                products.length === 0 ? <NotProduct />

                :

                products.map(productItem => (
                    <CardsMin
                        key={productItem.id}
                        id={productItem.id}
                        title={productItem.title}
                        price={productItem.price}
                        image={productItem.image}

                    />
                ))
            }

        </section>
    );
}

export default Cart;






