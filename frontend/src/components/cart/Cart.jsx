import React from 'react';

import CardsMin from '../cards/CardsMin';
import NotProduct from '../cart/NotProduct'

import '../../styles/Cart.css';

const Cart = ({ products }) => {

    return (

        <>

            <div className="notProduct">
                {
                    products.length === 0 ? <NotProduct />

                        :

                        <section className="section-cart flex flex-col h-full w-full z-30 bg-defaultBody" id="section-cart">
                            <h1>titleree</h1>
                            {
                                products.map(productItem => (
                                    <div className="products" key={productItem.id} >
                                        <CardsMin 
                                            title={productItem.title}
                                            price={productItem.price}
                                            image={productItem.image}
                                        />
                                    </div>

                                ))
                            }

                        </section>
                }
            </div>
        </>
    );
}

export default Cart;






