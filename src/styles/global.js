import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: rgb(113, 89, 193);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiaded !important;
    font-family: sans-serif;
  }
`

export default GlobalStyle
