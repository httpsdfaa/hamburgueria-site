import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

import '../styles/Cart.css';

const Cart = () => {
    return (
        <section className="section-cart flex flex-col h-full w-full z-30 bg-defaultBody" id="section-cart">
            <h1>Meu pedido</h1>
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
                <h4>Nenhum produto</h4>
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

    return (
        <>
            <section className="data-user ">
                <h3>Informe seus dados</h3>
                <form action="/" className="form-tag flex flex-col">
                    <label htmlFor="name">Nome: * </label>
                    <input type="text" id='name' name='name' placeholder='Nome' />

                    <label htmlFor="phone">Contato {`(whatsapp)`}: *</label>
                    <input type="tel" id='phone' name='phone' placeholder='DDD + Número' pattern={regex} />
                </form>
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