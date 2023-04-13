import styled, { css } from 'styled-components'
import { SizeStyles, WrapperProps } from './types'

const smallSize = css`
  padding: 24px;
  height: 24px;
  width: 24px;
`
const MediumSize = css`
  padding: 32px;
  height: 32px;
  width: 32px;
`

const sizesStyle: SizeStyles = {
  sm: smallSize,
  md: MediumSize,
}

export const Wrapper = styled('div')<WrapperProps>`
  ${({ size, isRound }) => css`
    background-color: aliceblue;
    ${sizesStyle[size]}
    ${isRound && { borderRadius: '50%' }}
  `}
  background: red;
`
