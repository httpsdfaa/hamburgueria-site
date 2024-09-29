import React from "react"

const NotProduct = () => {
    return (
        <>
            <div className="not-product">
                <h4 className='font-yaLike text-defaultBlack'>Nenhum produto!</h4>
                <Link to='/'>Voltar para o início</Link>
            </div>
        </>
    )
}

export default NotProduct;