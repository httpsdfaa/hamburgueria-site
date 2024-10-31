import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import Section from '../../styles/CardsMinStyled';

const CardsMin = ({ id, title, image, price, quantity, removeProduct }) => {

    const [changeQnt, setChangeQtd] = useState(1);
    const [productQnt, setProductQtd] = useState(1);

    // CALCULANDO VALOR BASEADO NA QUANTIDADE
    const totalPrice = price * productQnt

    console.log(quantity)

    // Alteração formulário
    const onchange = (e) => {
        e.preventDefault()
        setChangeQtd(e.target.value)
    }

    // quantidade pedido
    const onSubmit = (e) => {
        e.preventDefault()
        setProductQtd(changeQnt) // Atualizando quantidade do produto
        // quantity(changeQnt) // Atualizando quantidade função de cart
    }

    return (
        <Section>

            <>
                < img src={image} alt="products" />
                <h2 className="font-yaLike">{title}</h2>
                < span className="price">R$ {totalPrice}</span>
                <form onSubmit={onSubmit}>
                    <label htmlFor="number">Quantidade: {productQnt}</label>
                    <input type="number" min="1" name="number" id="number" value={changeQnt} onChange={onchange} />
                    <button>< IoIosArrowForward style={{ color: 'white', width: '20px', height: '20px' }} /></button>
                </form>
                <button id={id} onClick={() => removeProduct(id)}><  FaRegTrashAlt className="icon-trash" /></button>
            </>
        </Section >
    )
}

export default CardsMin;