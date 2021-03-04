import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    max-width: ${theme.grid.container};
    margin: auto;
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.large};
  `}
`

export const Body = styled.h1`
  ${({ theme }) => css`
    p {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.spacings.medium};
    }

    // p, a, ul, li, blockquote
  `}
`
