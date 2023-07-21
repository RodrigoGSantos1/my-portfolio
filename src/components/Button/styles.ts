import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    background-color: var(--blue-200);
    border-radius: 50px;
    width: 4rem;
    display: flex;
    justify-content: start;
    align-items: center;
    filter: brightness(1);
    color: transparent;
    transition: 800ms;


    cursor: pointer;

    &:hover {
        filter: brightness(0.9);
        transition: 800ms;
        width: 80%;  
        justify-content: center;
        color: var(--white);
    }

    p {
        font-weight: bold;
        font-size: 20px;
        width: 100%;
        text-align: center;
        white-space: nowrap;
    }

`;