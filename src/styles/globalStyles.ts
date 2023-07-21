import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: "montserrat", sans-serif;

    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: border-box;
    outline: none !important;

    -webkit-tap-highlight-color: transparent;


    &::-webkit-scrollbar {
        width: 0px;
        height: 15px;
        background-color: #FFFFFF;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #a8a8b3;
        border-radius: 5px;
        border: 1px solid #a8a8b3;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #5C6B70;
    }
    }


:root {
    --white: #FCFEFF;

    --gray-100: #5C6B70;
    --gray-200: #2E3438;

    --blue-100: #0096E0;
    --blue-200: #1A3361
}

@media (max-width: 1080px){
    html {
        font-size: 93.75%;
    }
}

@media (max-width: 720px){
    html {
        font-size: 87.5%;
    }
}

body {
    background: var(--gray-200);
    color: var(--white);
}

body,
input,
textarea,
select,
button {
    font: 400 1rem;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}
`;