import styled, { css } from 'styled-components'

const WrapperFront = styled.div`
  ${({ theme }) => css`
    height: 160px;
    width: 160px;

    background-color: ${theme.colors.cyane};
    border-radius: 32px 32px 0px 32px;

    margin-top: 120px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      transition: 0.3;
      transform: rotateY(0.5turn);
      transform-style: preserve-3d;
    }

    ::before {
      content: '';
      background-color: transparent;
      position: absolute;
      border: 3px solid currentColor;
      transform: var(--level-one);
    }
  `}
`

const WrapperBack = styled.div`
  ${({ theme }) => css`
    height: 160px;
    width: 160px;

    background-color: ${theme.colors.cyane};
    border-radius: 32px 32px 0px 32px;

    margin-top: 20px;
    display: flex;
    text-align: center;
    align-items: center;
    z-index: 11;
    margin-top: -160px;

    :hover {
      transition: 0.3;
      transform: rotateY(0.5turn);
    }
  `}
`

export { WrapperFront, WrapperBack }
