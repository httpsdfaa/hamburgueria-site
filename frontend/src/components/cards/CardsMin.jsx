import React, { useEffect, useId, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import NotProduct from "../cart/NotProduct";

import Section from '../../styles/CardsMinStyled';

const CardsMin = ({ setProducts, products }) => {

    

    // Função para consolidar os produtos
    const getConsolidatedProducts = () => {
        const counts = products.reduce((acc, item) => {
            if (acc[item.id]) {
                acc[item.id].quantity += 1; // Incrementa a quantidade se já existir
            } else {
                acc[item.id] = { ...item, quantity: item.quantity || 1 }; // Adiciona produto com quantidade inicial 1
            }
            return acc;
        }, {});

        return Object.values(counts);
    };

    // Armazena os produtos consolidados para exibição
    const consolidatedProducts = getConsolidatedProducts();

    // Handle Change
    const quantityInputId = useId();
    const [quantity, setQuantity] = useState();

    console.log('CARDS MIN:', products)

    // remoção de produtos ao clicar no icone lixo
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
                                    consolidatedProducts.map(product => (
                                        product.id !== null ?
                                            <Section key={product.id}>
                                                < img src={product.image} alt="products" />
                                                <h2 className="font-yaLike">{product.title}</h2>
                                                < span className="price">R$ {product.price}</span>
                                                <form onSubmit={(e) => e.preventDefault()}>
                                                    <label htmlFor="number">Quantidade: {product.quantity}</label>
                                                    <input className="number" type="number" min="1" name="number" id={quantityInputId} onChange={e => setQuantity(e.target.value)}
                                                    />
                                                    <button
                                                        onClick={(e) => product.quantity = quantity}
                                                    >< IoIosArrowForward style={{ color: 'white', width: '20px', height: '20px' }} /></button>
                                                </form>
                                                <button id={product.id} onClick={() => removeProduct(product.id)}><  FaRegTrashAlt className="icon-trash" /></button>
                                            </Section > : null

                                    ))
                                }
                            </>

                        </section>
                    </>
            }
        </>
    )
}

export default CardsMin;