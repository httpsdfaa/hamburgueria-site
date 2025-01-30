import React, { useState } from "react";

import Section from "../../styles/SummaryProductStyled";
import Button from "react-bootstrap/Button";

import { Link, Navigate } from "react-router-dom";

const SummaryProducts = ({ products }) => {

    const [paymentActive, setPaymentActive] = useState(false);

    // Contantes para definir valores
    // Em variáveis e constantes os valores estão em centavos
    // Ex.: 100,00 reais = 10000
    let priceSubtotal = 0
    const serviceTaxa = 100
    let priceDelivery = 1000

    // Cálculo do valor total
    products.map(item =>
        priceSubtotal += item.price * item.quantity
    )

    // Cálculo final
    const priceAmount = priceSubtotal + serviceTaxa + priceDelivery

    return (
        <>
            {
                // Lógica para clicar
                !paymentActive ?
                    <Section className="px-4 summary">
                        <hr />
                        <h2 className="font-yaLike text-defaultBlack">Resumo</h2>
                        {
                            products.map(item =>
                                <>
                                    <div className="product" key={item.id}>
                                        <span className="product-name" >
                                            {`${item.quantity}x ${item.title}`}
                                        </span>
                                        <span className="product price">
                                            {`R$ ${((item.price * item.quantity) / 100).toFixed(2)}`}
                                        </span>
                                    </div>
                                    <hr />
                                </>

                            )
                        }
                        <Link to="/">Adicionar mais itens</Link>
                        <section className="cartTotal text-blackOpacity">
                            <div className="subtotal text-defaultBlack">
                                <span className="products">Subtotal</span>
                                <span className="priceSubtotal">R$ {(priceSubtotal / 100).toFixed(2)}</span>
                            </div>
                            <div className="service">
                                <span className="serviceTaxa">Taxa de Serviço</span>
                                <span className="serviceTaxa">R$ {(serviceTaxa / 100).toFixed(2)}</span>
                            </div>
                            <div className="deliveryTaxa">
                                <span className="delivery">Taxa de Entrega</span>
                                <span className="priceDelivery">R$ {(priceDelivery / 100).toFixed(2)}</span>
                            </div>
                            <hr />
                            <div className="totalAmount text-defaultBlack">
                                <span className="amount">Total</span>
                                <span className="amountPrice">R$ {(priceAmount / 100).toFixed(2)}</span>
                            </div>
                        </section>
                        <hr />
                        <br />
                        <Button className="w-full"
                            variant='primary'
                            type="button"
                            as="input"
                            size='xm'
                            value="Fazer pedido"
                            onClick={() => setPaymentActive(true)}
                        />
                    </Section>

                    :

                    // Navegando para aba de pagamento.
                    // O local onde faz a rota é em `App.js`
                    <Navigate to="/pagamento" />
            }
        </>
    )
}

export default SummaryProducts;