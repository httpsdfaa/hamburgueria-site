import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

import '../styles/Cart.css';

const Cart = () => {
    return (
        <section className="section-cart flex flex-col h-full w-full z-30 bg-defaultBody" id="section-cart">
            <h1 className='font-yaLike text-defaultBlack'>Meu pedido</h1>
            <NotProduct />
            <UpdateProduct />
            <ProductControl />
            <DataUser />
        </section>
    );
}

export default Cart;

// Componentes dos Cart para ficar mais organizado pois existirá bastante código
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

const UpdateProduct = () => {
    return (
        <>
            <div className="update-product">
                <span>Adicione mais produtos</span>
                <Button variant='primary' size='sm'> + produtos</Button>
            </div>
        </>
    )
}

const DataUser = () => {

    // validação do regex para formato brasilieiro
    const regex = /^\d{2}[\s.-]?\d[\s.-]?\d{4}[\s.-]?\d{4}$/; // para formato de número com hifen e espaços

    // Validação de check em radio
    const [selectOption, setSelectionOption] = useState(null);

    const handleChange = (event) => {
        setSelectionOption(event.target.value)
    }

    return (
        <>
            <section className="data-user flex flex-col w-40">
                <h3 className='font-yaLike text-defaultBlack'>Informe seus dados</h3>
                <form action="/" className="form-tag flex flex-col">
                    <label htmlFor="name">Nome: * </label>
                    <input type="text" id='name' name='name' placeholder='Nome' />

                    <label htmlFor="phone">Contato {`(whatsapp)`}: *</label>
                    <input type="tel" id='phone' name='phone' placeholder='DDD + Número' pattern={regex} />
                </form>
                <form className="delivey-method">
                    <h6>Selecione a forma de entrega</h6>
                    <input type="radio" id='delivey' name='delivey' value='Entrega' checked={selectOption === 'Entrega'} onChange={handleChange}/>
                    <label htmlFor="delivey">Entrega</label>
                    <br/>
                    <input type="radio" id='pickup local' name='delivery' value='Retirada no local' checked={selectOption === 'Retirada no local'} onChange={handleChange}/>
                    <label htmlFor="local">Retirada no local</label>
                </form>
                <form action="/" className='pay-method'>
                    <h6>Selecione a forma de pagamento</h6>
                    <select name="payMethod" id="payMethod">
                        <option value="null"></option>
                        <option value="Dinheiro">Dinheiro</option>
                        <option value="Cartão de crédito">Cartão de crédito</option>
                        <option value="Cartão de débito">Cartão de débito</option>
                        <option value="pix">Pix</option>
                    </select>
                </form>
                <form action="/">
                    <h6>Observações</h6>
                    <input type="text"/>
                </form>
                <div className="agree">
                    <span>Concordo com a <Link to='/'>política da privacidade</Link></span>
                </div>
            </section>
        </>
    )
}

const ProductControl = () => {
    return (
        <>
            <section className="product-control">
                Controle de produto
            </section>
        </>
    )
}