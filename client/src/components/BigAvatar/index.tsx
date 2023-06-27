import { lorelei } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import { useMemo } from 'react'
import * as S from './styles'
import { Info } from '@phosphor-icons/react'

type BigAvatarProps = {
  src?: string
}

const BigAvatar = ({ src }: BigAvatarProps) => {
  src = useMemo(() => {
    return createAvatar(lorelei, {
      size: 110,
    }).toDataUriSync()
  }, [])

  return (
    <>
      <S.WrapperFront>
        <img src={src} alt="opa" />
        <Info
          size={26}
          weight="bold"
          style={{
            position: 'absolute',
            zIndex: '10',
            bottom: '20px',
            right: '8px',
          }}
        />
      </S.WrapperFront>
      <S.WrapperBack>Algumas informações virão aqui</S.WrapperBack>
    </>
  )
}

export { BigAvatar }
