import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { DefaultTheme } from 'styled-components/dist/types'
import { HeadingProps } from '.'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.4rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ ...rest }) => css`
    color: ${rest.theme.colors[rest.color!]}
    font-size: ${rest.theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${rest.theme.font.sizes.xxlarge}
    `}

    ${rest.lineLeft && wrapperModifiers.lineLeft(rest.theme)}
    ${rest.lineBottom && wrapperModifiers.lineBottom(rest.theme)}
  `}
`
