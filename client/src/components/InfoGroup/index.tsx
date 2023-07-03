import * as S from './style'
import { DotsThreeVertical } from '@phosphor-icons/react'

const GroupName = 'Geral'
const InfoMembers = {
  AmoutMembers: 12,
  Members: 'Membros',
}

const InfoGroup = () => {
  return (
    <S.Wrapper>
      <S.Button>
        <DotsThreeVertical size={24} weight={'bold'}></DotsThreeVertical>
      </S.Button>
      <S.Content>
        <S.GroupName>{GroupName}</S.GroupName>
        <S.Members>{`${InfoMembers.AmoutMembers} ${InfoMembers.Members}`}</S.Members>
      </S.Content>
    </S.Wrapper>
  )
}

export default InfoGroup
