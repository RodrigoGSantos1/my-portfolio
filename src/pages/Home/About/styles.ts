import styled from "styled-components";

export const Container = styled.div`
position: relative;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Line1 = styled.div`
    position: absolute;
    left: 1.96rem;
    top: 0;
    height:70vh;
    width: 1px;
    background-color: var(--blue-100);
`;

export const Line2 = styled.div`
    position: absolute;
    left: 1.96rem;
    bottom: 0;
    height: 20vh;
    width: 1px;
    background-color: var(--blue-100);
`;