import { ModalProps } from './types.Modal'
import { useState } from 'react'

import { X } from '@phosphor-icons/react'

import * as S from './styles.Modal'

const Modal = ({ children, head }: ModalProps) => {
  const [modalIsOpen, setOpen] = useState<boolean>(false)
  const toogleIsOpen = () => setOpen(!modalIsOpen)

  return (
    <>
      <S.ContainerWrapper>
        <S.ButtonOpenModal onClick={toogleIsOpen}>
          Abrir Modal
        </S.ButtonOpenModal>

        <S.ContainerModal isOpen={modalIsOpen}>
          <S.Modal>
            <S.ContainerHeader>
              <S.HeaderModal>
                {head}
                <S.ButtonCloseModal onClick={toogleIsOpen}>
                  <X size={18} color="rgba(87, 73, 105, 0.6)" weight="bold" />
                </S.ButtonCloseModal>
              </S.HeaderModal>
            </S.ContainerHeader>
            <S.ContentModal>{children}</S.ContentModal>
          </S.Modal>
        </S.ContainerModal>
      </S.ContainerWrapper>
    </>
  )
}

export { Modal }
