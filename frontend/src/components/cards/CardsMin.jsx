import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

import Section from '../../styles/CardsMinStyled';

const CardsMin = ({ id, title, image, price }) => {
    return (
        <Section>
            <img src={image} alt="products" />
            <h2>{title}</h2>
            <span className="price">{price}</span>
            <form action="/">
                <input type="number" min="1" name="number" id="number" />
            </form>
            <span >< FaRegTrashAlt className="icon-trash"/></span>
        </Section>
    )
}

export default CardsMin;