// import { FlattenSimpleInterpolation } from 'styled-components'
import * as S from './styles'

import { AvatarProps } from './types'
// import { lorelei } from '@dicebear/collection'
// import { createAvatar } from '@dicebear/core'
// import { useMemo } from 'react'

const Avatar = ({ size = 'md', isRound = true }: AvatarProps) => {
  // const avatar = useMemo(() => {
  //   return createAvatar(lorelei, {
  //     size: 128,
  //   }).toDataUriSync()
  // }, [])
  return (
    <S.Wrapper size={size} isRound={isRound}>
      {/* <img sizes="24" src={avatar} alt="" /> */}
    </S.Wrapper>
  )
}

export default Avatar
