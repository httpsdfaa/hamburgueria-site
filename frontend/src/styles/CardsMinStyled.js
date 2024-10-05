import styled from "styled-components";

const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #FFF;
    border: solid 1px rgba(0, 0, 0, 0.1);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.07);
    margin: 20px;
    border-radius: 20px;
    padding: 20px;
    gap: 10px;

    @media (max-width: 690px){
        flex-direction: column;
        gap: 30px;
    }

    .icon-trash {
        width: 20px !important;
        height: 20px;
        color: #cb2929;
    }

    .icon-trash:active {
        transform: scale(0.8)
    }

    .price {
        font-size: 20px;
    }

    input#number {
        width: 55px;
        height: 45px;
        background: rgb(241, 241, 241);
        border-radius: 5px;
        padding: 8px;
        border: solid 1px rgb(0, 0, 0, 0.1);
    }

    & > img {
        border-radius: 100%;
        width: 150px;
        height: auto;
    }
`;

export default Section;