import React from 'react'
import * as S from './style'
import Avatar from '../../assets/avatar.svg'

const UserName = 'Christian'

const ProfileInfo = () => {
  return (
    <S.Wrapper>
      <S.UserName>{UserName}</S.UserName>
      <S.Avatar src={Avatar} alt="Avatar" />
    </S.Wrapper>
  )
}

export default ProfileInfo
