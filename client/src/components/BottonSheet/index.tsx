import { useState } from 'react'
import * as S from './styles'

import { X } from '@phosphor-icons/react'
import { BottomSheetProps } from './types.BottomSheet'

const BottonSheet = ({ head, children, isOpen }: BottomSheetProps) => {
  const [isOpenBottom, setisOpenBottom] = useState(false)
  const toogleisOpenBottom = () => setisOpenBottom(!isOpenBottom)

  return (
    <S.ContainerWrapper>
      <S.OpenBotton onClick={toogleisOpenBottom}>
        Abrir BottomSheet
      </S.OpenBotton>

      <S.ContainerBottomSheet isOpen={isOpenBottom}>
        <S.BottonSheet>
          <S.Head>
            <S.HeadButton>
              <S.OpenBotton onClick={toogleisOpenBottom}>
                <X size={22} color="rgba(87, 73, 105, 0.6)" weight="bold" />
              </S.OpenBotton>
            </S.HeadButton>
            {head}
          </S.Head>
          <S.ContentBottomSheet>{children}</S.ContentBottomSheet>
        </S.BottonSheet>
      </S.ContainerBottomSheet>
    </S.ContainerWrapper>
  )
}

export { BottonSheet }
