import * as S from './styles'

import { X } from '@phosphor-icons/react'
import { BottomSheetProps } from './types'

const BottomSheet = ({
  head,
  children,
  onDimiss,
  isOpen = false,
}: BottomSheetProps) => {
  return (
    <S.ContainerWrapper>
      <S.ContainerBottomSheet isOpen={isOpen}>
        <S.BottonSheet>
          <S.Head>
            {head}
            <S.OpenBotton onClick={onDimiss}>
              <X size={22} color="rgba(87, 73, 105, 0.6)" weight="bold" />
            </S.OpenBotton>
          </S.Head>
          <S.ContentBottomSheet>{children}</S.ContentBottomSheet>
        </S.BottonSheet>
      </S.ContainerBottomSheet>
    </S.ContainerWrapper>
  )
}

export { BottomSheet }
