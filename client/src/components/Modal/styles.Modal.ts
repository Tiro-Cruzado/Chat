import styled, { css } from 'styled-components'
import { ContainerModalProps } from './types.Modal'

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
  z-index: 9;

  text-align: center;
  background-color: white;
  /* box-shadow: 80px 16px 64px 80px black; */
  border-radius: 8px;
`

const HeaderModal = styled.div`
  padding: 32px;
  display: flex;
  justify-content: end;
  width: 100%;
  box-sizing: border-box;
`
const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
`

const ContainerModal = styled.div<ContainerModalProps>`
  ${({ isOpen }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    background: rgba(60, 51, 72, 0.8);
    backdrop-filter: blur(2px);

    display: ${isOpen === true ? 'flex' : 'none'};
  `}
`
const ContentModal = styled.div`
  padding: 32px;
`

const ButtonOpenModal = styled.button`
  display: flex;
  align-items: center;
  padding: 15px;
  height: 15px;
  border: none;

  background-color: #8c53d6;
  color: white;
  border-radius: 4px;

  z-index: 0;
`

const ButtonCloseModal = styled.button`
  margin-right: 10px;
  background-color: transparent;
  border: none;
`

export {
  Modal,
  ContainerHeader,
  ButtonOpenModal,
  ContainerModal,
  ButtonCloseModal,
  HeaderModal,
  ContainerWrapper,
  ContentModal,
}
