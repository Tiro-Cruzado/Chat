import { ModalProps } from './types.Modal'

import { X } from '@phosphor-icons/react'

import * as S from './styles.Modal'

const Modal = ({ children,
  head,
  onDimiss,
  isOpen
}: ModalProps) => {
  return (
    <>
      <S.ContainerWrapper>
        <S.ContainerModal isOpen={isOpen}>
          <S.Modal>
            <S.ContainerHeader>
              <S.HeaderModal>
                {head}
                <S.ButtonCloseModal onClick={onDimiss}>
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
