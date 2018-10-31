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
  }

  h1 {
    font-weight: 700;
    font-size: ${props => props.theme.fonts.h1.desktop};
  }
`
