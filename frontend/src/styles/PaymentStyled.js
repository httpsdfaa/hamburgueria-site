import styled from "styled-components";

const Section = styled.section `

    & > button.btn-pay {
        display: block;
        position: absolute;
        top: 8px;
        left: 8px;

    }

    & > div.header-pay {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        padding: 5px;
    }
`

export default Section;