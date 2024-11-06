import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import Section from "../../styles/PaymentStyled";

const Payment = () => {
    return (
        <>
            <Section className="pay">
                <button className="btn-pay"><IoIosArrowBack size="25px" color="#805557"/></button>
                <div className="header-pay">
                    <h2 className="font-yaLike">Pagamento</h2>
                </div>
            </Section>
        </>
    )
}

export default Payment;