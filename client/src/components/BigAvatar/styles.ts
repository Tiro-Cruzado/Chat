import styled, { css } from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 160px;

  margin: 120px 120px;

  /* :hover {
    transition: 0.69s;
    transform: rotateY(0.5turn);
    transform-style: preserve-3d;
    transform: perspective(100deg) rotateY(100deg);
  } */
`

const WrapperFront = styled.div`
  ${({ theme }) => css`
    height: 160px;
    width: 160px;
    box-sizing: border-box;
    padding: px;
    background-color: ${theme.colors.cyane};
    border-radius: 32px 32px 0px 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  `}
`

const WrapperBack = styled.div`
  ${({ theme }) => css`
    height: 160px;
    width: 160px;

    background-color: ${theme.colors.cyane};
    border-radius: 32px 32px 32px 0px;

    display: flex;
    /* flex-direction: column-reverse; */
    text-align: center;
    align-items: center;
    z-index: -11;

    transform: rotateY(0.5turn);
  `}
`

export { WrapperFront, WrapperBack, Container }
