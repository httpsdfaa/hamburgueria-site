import React from "react";

import DivNotProduct from "../../styles/NotProductStyled";

const NotProduct = () => {
    return (
        <>
            <DivNotProduct className="not-product">
                <h4 className='font-yaLike text-defaultBlack'>Nenhum produto!</h4>
                <a to='/'>Voltar para o início</a>
            </DivNotProduct>
        </>
    )
}

export default NotProduct;