import { lorelei } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import { useMemo, useState } from 'react'
import * as S from './styles'
import { Info } from '@phosphor-icons/react'
import styled from 'styled-components'

type BigAvatarProps = {
  src?: string
}

const BigAvatar = ({ src }: BigAvatarProps) => {
  src = useMemo(() => {
    return createAvatar(lorelei, {
      size: 110,
    }).toDataUriSync()
  }, [])
  // const showBackFace = document.getElementById('btn-info')?.style{{ }
  function showBackFaceInfo() {
    const Container = styled.div`
      position: relative;
      display: flex;
      align-items: center;
      width: 160px;

      margin: 120px 120px;

      transition: 0.69s;
      transform: rotateY(0.5turn);
      transform-style: preserve-3d;
      transform: perspective(100deg) rotateY(100deg);
    `
    return Container
  }

  const [isShow, setIsShow] = useState(false)

  function handleShow() {
    setIsShow(true)
  }
  return (
    <>
      <S.Container>
        <S.WrapperFront>
          <img src={src} alt="opa" />
          <Info
            id="btn-info"
            onClick={() => showBackFaceInfo}
            size={20}
            weight="bold"
            style={{
              position: 'absolute',
              zIndex: '10',
              bottom: '16px',
              right: '8px',
            }}
          />
        </S.WrapperFront>
        <S.WrapperBack>Algumas informações virão aqui</S.WrapperBack>
      </S.Container>
    </>
  )
}

export { BigAvatar }
