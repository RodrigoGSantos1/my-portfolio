import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    background-color: var(--white);
    

`;

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 95%;
    height: 90%;
    
    color: var(--blue-200);
    border-top: 1px solid #a9a9a9;
    border-bottom: 1px solid #a9a9a9;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 35px;
    }
`;

export const Number = styled.div`
    font-size: 100px;
    font-weight: bold;
    margin-bottom: 1rem;
`;