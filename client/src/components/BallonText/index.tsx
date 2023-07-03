import React from 'react'
import * as S from './style'

type BallonTextProps = {
  wasReceived?: boolean
  sentAt: string
}

const BallonText = ({ wasReceived, sentAt }: BallonTextProps) => {
  return (
    <S.Wrapper>
      <S.Receive>
        <S.Text>Aaah... Uuuuh... Meti...</S.Text>
        <S.Hours>
          <S.Hours>22:30 PM</S.Hours>
        </S.Hours>
      </S.Receive>
      <S.Send>
        <S.Text>Papará....</S.Text>
        <S.Hours>22:35 PM</S.Hours>
      </S.Send>
    </S.Wrapper>
  )
}

export default BallonText
