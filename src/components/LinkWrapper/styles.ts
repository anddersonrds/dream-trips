import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: ${theme.layers.alwaysOnTop};
    top: ${theme.spacings.medium};
    right: ${theme.spacings.medium};
    color: ${theme.colors.white};
    cursor: pointer;

    svg {
      transition: color ${theme.transition.default};
    }

    &:hover {
      svg {
        color: ${theme.colors.cyan};
      }
    }
  `}
`
