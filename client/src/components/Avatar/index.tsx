import * as S from './styles'

import { AvatarProps } from './types'
import { lorelei } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import { useMemo } from 'react'

const Avatar = ({
  size = 'md',
  isRound = false,
  src = '',
  status = '',
}: AvatarProps) => {
  src = useMemo(() => {
    return createAvatar(lorelei, {
      size: 80,
    }).toDataUriSync()
  }, [])
  return (
    <>
      <S.Wrapper size={size} isRound={isRound} src="">
        <img sizes="24" src={src} alt="" />
      </S.Wrapper>
      <S.BadgeStatus status={status} />
    </>
  )
}

export default Avatar
