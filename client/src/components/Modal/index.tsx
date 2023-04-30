import React, { useState } from 'react'
import * as S from './styles'

type ModalProps = {
  children?: React.ReactNode
  isOpen?: boolean
}

const Modal = ({ children, isOpen }: ModalProps) => {
  const [modalIsOpen, setOpen] = useState<boolean>(false)
  const toogleIsOpen = () => setOpen(!modalIsOpen)

  return (
    <>
      <S.ButtonOpenModal onClick={toogleIsOpen}>Abrir Modal</S.ButtonOpenModal>
      <S.ContainerModal>
        <S.Modal isOpen={modalIsOpen}>
          <S.ContaineContentModal>
            <S.HeaaderModal>
              <S.ButtonCloseModal onClick={toogleIsOpen}>
                Fechar Modal
              </S.ButtonCloseModal>
            </S.HeaaderModal>
            {children}
            <h1>Robertinho da Modal</h1>
          </S.ContaineContentModal>
        </S.Modal>
      </S.ContainerModal>
    </>
  )
}

export { Modal }
