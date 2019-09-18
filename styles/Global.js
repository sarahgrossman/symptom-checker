import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Helvetica, sans-serif;
    font-weight: normal;
  }

  p {
    font-family: Helvetica, sans-serif;
    line-height: 1.5em;
    font-weight: normal;
    font-size: 21px;
    margin-bottom: 10px;
  }
`

export default GlobalStyle
