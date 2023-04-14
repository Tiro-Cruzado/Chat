import * as S from './styles'

import { AvatarProps } from './types'
import { lorelei } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import { useMemo } from 'react'

const Avatar = ({ size = 'md', isRound = false, src }: AvatarProps) => {
  const avatar = useMemo(() => {
    return createAvatar(lorelei, {
      size: 90,
    }).toDataUriSync()
  }, [])
  return (
    <S.Wrapper size={size} isRound={isRound} src="">
      <S.BadgeStatus />
      <img sizes="24" src={avatar} alt="" />
    </S.Wrapper>
  )
}

export default Avatar
