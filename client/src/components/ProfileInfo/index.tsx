import React from 'react'
import * as S from './style'
import Avatar from '../Avatar/index'

const UserName = 'Christian'

const ProfileInfo = () => {
  return (
    <S.Wrapper>
      <S.UserName>{UserName}</S.UserName>
      <div>{<Avatar size="sm" />}</div>
    </S.Wrapper>
  )
}

export default ProfileInfo
