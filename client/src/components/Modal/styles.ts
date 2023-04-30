import styled, { css } from 'styled-components'

type ContainerModalProps = {
  isOpen: boolean
}
const Modal = styled.div<ContainerModalProps>`
  ${({ isOpen }) => css`
    width: 324px;
    height: 400px;
    background-color: aliceblue;
    display: ${isOpen === true ? 'flex' : 'none'};
  `}
`

const ContainerModal = styled.div`
  /* display: flex; */
  justify-content: center;
`

const ContaineContentModal = styled.div`
  /* display: flex;
   justify-content: center; */
  text-align: center;
`
const HeaaderModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

const ButtonOpenModal = styled.button`
  padding: 15px;
`

const ButtonCloseModal = styled.button`
  height: 60px;
  width: 60px;
`

export {
  Modal,
  ButtonOpenModal,
  ContainerModal,
  ContaineContentModal,
  ButtonCloseModal,
  HeaaderModal,
}
