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


    & > img {
        border-radius: 100%;
        width: 150px;
        height: auto;
    }
`;

export default Section;