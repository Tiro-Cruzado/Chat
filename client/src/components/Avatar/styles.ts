import styled, { css } from 'styled-components'
import { SizeStyles, WrapperProps } from './types'

const smallSize = css`
  padding: 2px;
  height: 24px;
  width: 24px;
`
const MediumSize = css`
  padding: 8px;
  height: 32px;
  width: 32px;
`

const sizesStyle: SizeStyles = {
  sm: smallSize,
  md: MediumSize,
}

const BadgeStatus = styled('div')`
  height: 8px;
  width: 8px;
`

export const Wrapper = styled('div')<WrapperProps>`
  ${({ size, isRound }) => css`
    display: flex;
    background-color: #c6ebfa;
    border-radius: 5px 5px 0px 5px;

    ${sizesStyle[size]}
    ${isRound && { borderRadius: '50%' }}
  `}
`
