import * as S from './styles'
// import React from 'react'

type CardProps = {
  children: string
}

const Card = ({ children }: CardProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export { Card }
