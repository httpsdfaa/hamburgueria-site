import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import Section from '../../styles/CardsMinStyled';

const CardsMin = ({ id, title, image, price, removeProduct}) => {

    const [productQnt, setProductQtd] = useState(1);
    const [products, setProducts] = useState({});

    useEffect(() => {
        setProducts({
            id: id,
            title: title,
            image: image,
            price: price
        })
    }, [setProducts])

    // Alteração formulário
    const onchange = (e) => {
        e.preventDefault()
        const value = e.target.value
        setProductQtd(value)
    }

    // quantidade pedido
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(productQnt)
    }

    return (
        <Section>
            <img src={products.image} alt="products" />
            <h2 className="font-yaLike">{products.title}</h2>
            <span className="price">{products.price}</span>
            <form onSubmit={onSubmit}>
                <label htmlFor="number">Quantidade: </label>
                <input type="number" min="1" name="number" id="number" value={productQnt} onChange={onchange} />
                <button>< IoIosArrowForward style={{ color: 'white', width: '20px', height: '20px' }} /></button>
            </form>
            <button id={id} onClick={() => removeProduct(id)}><  FaRegTrashAlt className="icon-trash" /></button>
        </Section>
    )
}

export default CardsMin;