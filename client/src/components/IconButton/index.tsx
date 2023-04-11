import React from 'react'
import * as S from './style'
import { PaperPlaneTilt } from '@phosphor-icons/react'

type iconButtonProps = {
  disabled?: boolean
  onClick: () => void
}
const IconButton = ({ disabled, onClick }: iconButtonProps) => {
  return (
    <S.Container disabled={disabled} onClick={onClick}>
      <PaperPlaneTilt size={20} color="#ffffff" weight="bold" />
    </S.Container>
  )
}
export default IconButton
