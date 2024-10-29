import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import Section from '../../styles/CardsMinStyled';

const CardsMin = ({ id, title, image, price, removeProduct }) => {

    const [productQnt, setProductQtd] = useState(1);
    const [products, setProducts] = useState([]);

    let storageCart = 0
    useEffect(() => {
        storageCart = localStorage.getItem('cart')

        storageCart = JSON.parse(storageCart)
        console.log(storageCart)

        setProducts([{
            // id: storageCart.id,
            // title: storageCart.title,
            // image: storageCart.image,
            // price: storageCart.price

            storageCart
        }])

    }, [setProducts, id, storageCart])

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
            {
                storageCart.map(productItem =>
                    <>
                        < img src={productItem.image} alt="products" />
                        <h2 className="font-yaLike">{productItem.title}</h2>
                        <span className="price">{productItem.price}</span>
                        <form onSubmit={onSubmit}>
                            <label htmlFor="number">Quantidade: </label>
                            <input type="number" min="1" name="number" id="number" value={productQnt} onChange={onchange} />
                            <button>< IoIosArrowForward style={{ color: 'white', width: '20px', height: '20px' }} /></button>
                        </form>
                        <button id={id} onClick={() => removeProduct(id)}><  FaRegTrashAlt className="icon-trash" /></button>
                    </>)}
        </Section>
    )
}

export default CardsMin;