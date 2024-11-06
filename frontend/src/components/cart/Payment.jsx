import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import Section from "../../styles/PaymentStyled";
import { useNavigate } from "react-router-dom";

const Payment = () => {

    const navigate = useNavigate();

    const navigateCart = () => {
        navigate("/carrinho")
    }

    return (
        <>
            <Section className="pay">
                <button className="btn-pay" onClick={navigateCart}><IoIosArrowBack size="25px" color="#805557"/></button>
                <div className="header-pay">
                    <h2 className="font-yaLike">Pagamento</h2>
                </div>
            </Section>
        </>
    )
}

export default Payment;