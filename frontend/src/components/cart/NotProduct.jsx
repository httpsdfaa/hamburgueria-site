import React from "react";

import DivNotProduct from "../../styles/NotProductStyled";
import { Link } from "react-router-dom";

const NotProduct = () => {
    return (
        <>
            <DivNotProduct className="not-product">
                <h4 className='font-yaLike text-defaultBlack'>Nenhum produto!</h4>
                <Link to='/'>Voltar ao início</Link>
            </DivNotProduct>
        </>
    )
}

export default NotProduct;