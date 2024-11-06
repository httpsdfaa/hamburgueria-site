import React, { useEffect, useId, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import NotProduct from "../cart/NotProduct";
import DataUser from "../cart/DataUser";
import ProductControl from "../cart/ProductControl";
import UpdateProduct from "../cart/UpdateProduct";


import { errorMessages } from "../../utils/messages";

import Section from '../../styles/CardsMinStyled';
import SummaryProducts from "../cart/SummaryProduct";

const CardsMin = ({ setProducts, products }) => {

    const [quantityChange, setQuantityChange] = useState();

    const quantityInputId = useId();

    console.log('CARDS MIN:', products)

    const onclick = (e, product) => {
        e.preventDefault()

        // Atualizando a quantidade ao modificar o input
        setProducts(prevProd => 
            prevProd.map(p =>
                p.id === product.id ? {...p, 
                    quantity: Number(quantityChange)
                } : p
            )
        )
    }

    // remoção de produtos ao clicar no icone lixo
    const removeProduct = (id, title) => {
        // Alertando sobre o produto removido
        alert(title + ' removido!')

        setProducts(prevProd => prevProd.filter(product => product.id !== id)); // quando clicado retornara falso e removerá
    }

    return (
        <>
            {
                products.length === 0 ? <NotProduct />

                    :

                    <>

                        <section className="section-cart bg-defaultBody" id="section-cart">
                            <h1 className='font-yaLike mt-8 ml-8 text-left'>Meus pedidos</h1>
                            <>
                                {
                                    products.map(product => (
                                        product.id !== null ?
                                            <Section key={product.id}>
                                                < img src={product.image} alt="products" />
                                                <h2 className="font-yaLike">{product.title}</h2>
                                                < span className="price">R$ {((product.price / 100) * product.quantity).toFixed(2)}</span>
                                                <form onSubmit={(e) => e.preventDefault()}>
                                                    <label htmlFor="number">Quantidade: {product.quantity}</label>
                                                    <input className="number" type="number" min="1" name="number" id={quantityInputId}
                                                        onChange={e => 
                                                            setQuantityChange(
                                                                e.target.value <= 0 ? 1 : e.target.value
                                                            )}
                                                    />
                                                    <button
                                                        onClick={(e) => onclick(e, product)}
                                                    >< IoIosArrowForward style={{ color: 'white', width: '20px', height: '20px' }} /></button>
                                                </form>
                                                <button id={product.id} onClick={() => removeProduct(product.id, product.title)}><  FaRegTrashAlt className="icon-trash" /></button>
                                            </Section > : null

                                    ))
                                }
                                <SummaryProducts products={products}/>
                            </>

                        </section>
                    </>
            }
        </>
    )
}

export default CardsMin;