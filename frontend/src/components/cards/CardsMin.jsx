import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import NotProduct from "../cart/NotProduct";

import Section from '../../styles/CardsMinStyled';

const CardsMin = ({ setProducts, products }) => {

    const [changeQnt, setChangeQtd] = useState(1);
    const [productQnt, setProductQtd] = useState(1);

    console.log('CARDS MIN:', products)

    // remoção de produtos ao clicar no icone lixo
    const removeProduct = (id) => {
        setProducts(prevProd => prevProd.filter(product => product.id !== id)); // quando clicado retornara falso e removerá
    }

    // Alteração formulário
    const onchange = (e) => {
        e.preventDefault()
        setChangeQtd(e.target.value)
    }

    // quantidade pedido
    const onSubmit = (e) => {
        e.preventDefault()
        setProductQtd(changeQnt) // Atualizando quantidade do produto
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
                                    products.map(product => (
                                        product.id !== null ?
                                            <Section key={product.id}>
                                                < img src={product.image} alt="products" />
                                                <h2 className="font-yaLike">{product.title}</h2>
                                                < span className="price">R$ {product.price}</span>
                                                <form onSubmit={onSubmit}>
                                                    <label htmlFor="number">Quantidade: {productQnt}</label>
                                                    <input type="number" min="1" name="number" id="number" value={changeQnt} onChange={(e) => onchange(e)} />
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