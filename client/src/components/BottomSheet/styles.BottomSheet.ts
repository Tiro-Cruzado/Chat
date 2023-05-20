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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 32px;
  box-sizing: border-box;
  font-size: 36px;
  font-family: Inter;
`

const ContainerBottomSheet = styled.div<ContainerBottomSheetProps>`
  ${({ isOpen }) => css`
    position: fixed;
    background: rgba(60, 51, 72, 0.8);
    backdrop-filter: blur(2px);

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    z-index: 10;
    display: ${isOpen === true ? 'flex' : 'none'};
  `}
`

const BottonSheet = styled.div`
  position: fixed;
  width: 400px;
  max-height: 75vh;
  min-height: 50vh;
  bottom: 0;

  background-color: white;
  border-radius: 16px 16px 0px 0px;
  z-index: 110;
  /* overflow: auto; */
`
const ContentBottomSheet = styled.div`
  padding: 0 32px 0 32px;
  max-height: 400px;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 12px;
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
