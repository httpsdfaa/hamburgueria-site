import styled from "styled-components";

const Section = styled.section `
    
    background: #fff;

    & > div.product,
    & > section.cartTotal > div.subtotal,
    & > section.cartTotal > div.service,
    & > section.cartTotal > div.priceSubtotal,
    & > section.cartTotal > div.serviceTaxa,
    & > section.cartTotal > div.deliveryTaxa,
    & > section.cartTotal > div.totalAmount {
        display: flex;
        justify-content: space-between;
        margin: 0 30px;
    }
`

export default Section;