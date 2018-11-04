import styledNormalize from 'styled-normalize'
import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  ${styledNormalize};

  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

  html {
    font-size: ${props => props.theme.fonts.rootSize};
  }

  body {
    font-family: ${props => props.theme.fonts.family};
    background-color: ${props => props.theme.colors.charcoal};
    min-height: 100vh;
    color: ${props => props.theme.colors.charcoal};
  }

  #root {
    height: 100%;
  }

  h1 {
    font-weight: 700;
    font-size: ${props => props.theme.fonts.h1.desktop};
  }

  a {
    color: ${props => props.theme.colors.blue_dark};
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }

  p {
    line-height: 1.5;
  }

  .tooltip {
    position: absolute;

    padding: 0.1rem;

    background-color: #fff;
  }
`
