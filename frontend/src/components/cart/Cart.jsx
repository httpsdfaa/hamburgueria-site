import React from 'react';

import CardsMin from '../cards/CardsMin';
import NotProduct from '../cart/NotProduct'

import '../../styles/Cart.css';

const Cart = ({ products }) => {

    return (

        <>
            {
                products.length === 0 ? <NotProduct />

                    :

                    <>

                        <section className="section-cart bg-defaultBody" id="section-cart">
                            <h1 className='font-yaLike'>Meus pedidos</h1>
                            <>
                                {
                                    products.map(productItem => (
                                        <div className="products" key={productItem.id} >
                                            <CardsMin
                                                id={productItem.id}
                                                title={productItem.title}
                                                price={productItem.price}
                                                image={productItem.image}
                                            />
                                        </div>

                                    ))
                                }
                            </>

                        </section>
                    </>
            }
        </>
    );
}

export default Cart;






