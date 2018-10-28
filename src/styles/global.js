import { createGlobalStyle } from 'styled-components'

export const Application = createGlobalStyle`
  *{
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    background: rgb(113, 89, 193);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiaded !important;
  }
`
