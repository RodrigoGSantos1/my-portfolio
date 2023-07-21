import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
`;

export const Home = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100vh;

`;

export const Line1 = styled.div`
    position: absolute;
    left: 6.2rem;
    bottom: 1.15rem;
    height: 30vh;
    width: 1px;
    background-color: var(--blue-100);
    transform: rotate(-35deg);
`;

export const Line2 = styled.div`
    position: absolute;
    left: 1.96rem;
    height: 90vh;
    width: 1px;
    background-color: var(--blue-100);
`;

export const Content = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .text {
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 60px;
        width: 6rem;
        font-weight: 300;
        border-bottom: 1px solid var(--white);
        margin-bottom: 1rem;
    }

    p {
        font-size: 30px;
        width: 25rem;
        font-weight: 300;
    }

    span {
        font-size: 30px;
        width: 25rem;
        font-weight: bold;
        color: var(--blue-100);
    }

`;

export const Image = styled.img`
    width: 80%;
    height: auto;
    border-radius: 50%;
    filter: brightness(0.7) opacity(0.8);
`;
