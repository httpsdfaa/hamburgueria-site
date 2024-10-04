import React from "react";

import Section from '../../styles/CardsMinStyled';

const CardsMin = ({ id, title, image, price }) => {
    return (
        <Section>
            <img src={image} alt="products" />
            <span>{id}</span>
            <h2>{title}</h2>
            <form action="/">
                <input type="number" min="1" name="number" id="number" />
            </form>
            <span>{price}</span>
            <span>X</span>
        </Section>
    )
}

export default CardsMin;