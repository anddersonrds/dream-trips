import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components'

type GlobalStyleProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100%;
      background: ${theme.colors.blue};
      color: ${theme.colors.white};
    }

    body {
      font-family: ${theme.font.family};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.blue};
      `};
    }

    p {
      font-size: 2rem;
      line-height: ${theme.font.sizes.medium};
    }

    a {
      color: ${theme.colors.cyan};
    }
  `};
`

export default GlobalStyles
