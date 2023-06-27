import styled, { css } from 'styled-components'

const WrapperFront = styled.div`
  ${({ theme }) => css`
    height: 160px;
    width: 160px;
    background-color: ${theme.colors.cyane};
  `}
`

export { WrapperFront }
