import styled, { css } from 'styled-components'
import {
  SizeStyles,
  WrapperProps,
  StylesStatus,
  BadgeStatusProps,
} from './types'

const smallSize = css`
  padding: 4px;
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

const StatusOnline = css`
  background-color: #3ab538;
`
const StatusAway = css`
  background-color: #f4bf37;
`
const StatusOffliine = css`
  background-color: #a4a0a9;
`

const BadgeStatusCongif: StylesStatus = {
  online: StatusOnline,
  away: StatusAway,
  offline: StatusOffliine,
  '': [],
}

export const BadgeStatus = styled.div<BadgeStatusProps>`
  ${({ status }) => css`
    height: 8px;
    width: 8px;
    margin-top: -32px;
    margin-left: 24px;
    border-radius: 30px;
    border: 1px solid #ffffff;
    z-index: 10;

    ${BadgeStatusCongif[status]}
  `}
`

export const Wrapper = styled.div<WrapperProps>`
  ${({ size, isRound }) => css`
    display: flex;
    background-color: #c6ebfa;
    border-radius: 5px 5px 0px 5px;

    ${sizesStyle[size]}
    ${isRound && { borderRadius: '50%' }}
  `}
`

export const Container = styled('div')``
