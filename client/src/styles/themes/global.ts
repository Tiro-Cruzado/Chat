import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
    }

    body {
        padding-top: 0;
        padding: 16px;
        height: 100vh;
        width: 100vw;

        background-color: #FBFBFB;
    }
`
