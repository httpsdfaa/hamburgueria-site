import React, { useEffect, useState } from 'react';

import CardsMin from '../cards/CardsMin';
import NotProduct from '../cart/NotProduct'

import '../../styles/Cart.css';

const Cart = ({ products, setProducts}) => {

    const [productsEqual, setProductsEqual] = useState([]);

    useEffect(() => {
        setProductsEqual(products);
    }, [setProductsEqual, products])
    

    console.log('Compontente CART: ', products)
    console.log('Compontente CART IGUAL: ', productsEqual)

    // remoção de produtos ao clicar em lixo
    const removeProduct = (id) => {
        setProducts(prevProd => prevProd.filter(product => product.id !== id)); // quando clicado retornara falso e removerá
    }

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
                                         productItem.id !== null ?
                                            <div className="products" key={productItem.id} >
                                                <CardsMin 
                                                    id={productItem.id}
                                                    title={productItem.title}
                                                    image={productItem.image}
                                                    price={productItem.price}
                                                    removeProduct={removeProduct}
                                                />
                                            </div> : null

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






