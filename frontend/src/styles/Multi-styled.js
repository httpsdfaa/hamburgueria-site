import styled from "styled-components";

// Estilização em mais de um component
const Button = styled.button`
    & > .icons-cards{
        width: 30px !important;
        height: 30px !important;
        color: #0866ff;
        cursor: pointer;
    }

    & > .button-add:active { /* EFEITO CLICK */
        transform: scale(0.90);
    }
`;

export default Button;