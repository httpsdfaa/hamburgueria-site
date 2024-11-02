import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import NotProduct from "../cart/NotProduct";

import Section from '../../styles/CardsMinStyled';

const CardsMin = ({ setProducts, products }) => {

    console.log('CARDS MIN:', products)


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

    // Função para atualizar quantidade
    const handleQuantityChange = (e, id) => {
        const newQuantity = parseInt(e.target.value, 10);

        // Atualiza quantidade no estado `products`
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === id ? { ...product, quantity: newQuantity } : product
            )
        );
    };


    // remoção de produtos ao clicar no icone lixo
    const removeProduct = (id) => {
        setProducts(prevProd => prevProd.filter(product => product.id !== id)); // quando clicado retornara falso e removerá
    }

    // // Alteração formulário
    // const onchange = (e) => {
    //     e.preventDefault()
    //     setChangeQtd(e.target.value)
    // }

    // // quantidade pedido
    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     setProductQtd(changeQnt) // Atualizando quantidade do produto
    // }

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
                                                    <input type="number" min="1" name="number" id="number" value={product.quantity} onChange={(e) => handleQuantityChange(e, product.id)} />
                                                    <button>< IoIosArrowForward style={{ color: 'white', width: '20px', height: '20px' }} /></button>
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