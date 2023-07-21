import styled from "styled-components";
import { Link } from 'react-router-dom'


interface IButton {
    page: string;
    pathName: string
}


export const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 5rem;
    background-color: var(--gray-200);
    z-index: 10;

    img {
        z-index: 0;
        width: 4%;
        border-radius: 50%;
        filter: brightness(0.5);
        cursor: pointer;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;

export const Button = styled.div<IButton>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 3rem;

    border-bottom: ${(props) => (props.page === props.pathName ? "1px solid var(--blue-100)" : "none")} ;
`;

export const Links = styled(Link)`

    font-size: 20px;

    &:hover{
        filter: brightness(0.5);
    }
`
