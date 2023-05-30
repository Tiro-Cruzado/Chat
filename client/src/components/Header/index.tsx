import React from 'react'
import * as S from './style'

type HeaderProps = {
  isFloating?: boolean
  childrenLeft: React.ReactNode
  childrenRight: React.ReactNode
}

const Header = ({ isFloating, childrenLeft, childrenRight }: HeaderProps) => {
  return (
    <S.Wrapper isFloating={isFloating}>
      {childrenLeft}
      {childrenRight}
    </S.Wrapper>
  )
}

export default Header
