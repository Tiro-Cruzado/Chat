import styled, { css } from 'styled-components'
type WrapperProps = {
  isFloating?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ isFloating }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 200px auto;
    width: 400px;

    font-family: 'Inter', sans-serif;
    ${isFloating && 'box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.1)'}
  `}
`
