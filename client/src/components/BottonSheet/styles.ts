import styled, { css } from 'styled-components'

import { ContainerBottomSheetProps } from './types.BottomSheet'

const OpenBotton = styled('button')`
  height: 20px;
  background-color: transparent;
  border: none;

  :hover {
    cursor: pointer;
  }
`

const HeadButton = styled.h1`
  display: flex;
  justify-content: end;
  font-size: 36px;
  height: 50px;
`
const Head = styled.h1`
  /* display: flex; */
  justify-content: space-between;

  font-size: 36px;
  width: 100%;
  padding: 0 32px 0 32px;
  box-sizing: border-box;
`

const ContainerBottomSheet = styled.div<ContainerBottomSheetProps>`
  ${({ isOpen }) => css`
    position: fixed;
    background-color: aqua;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    z-index: 10;
    ${isOpen === true ? 'flex' : 'none'}
  `}
`

const BottonSheet = styled.div`
  position: fixed;
  width: 500px;
  height: 65vh;
  bottom: 0;

  background-color: gray;
  border-radius: 16px 16px 0px 0px;
  /* overflow: auto; */
`
const ContentBottomSheet = styled.div`
  display: flex;
  padding: 0 32px 0 32px;
  /* justify-content: center; */
`

const ContainerWrapper = styled.h1`
  display: flex;
  justify-content: center;

  margin: 0;
`

export {
  Head,
  BottonSheet,
  ContainerWrapper,
  OpenBotton,
  ContainerBottomSheet,
  ContentBottomSheet,
  HeadButton,
}
