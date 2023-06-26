import IconButton from '../IconButton'
import { Input } from '../Input'
import * as S from './style'

type MessageFormProps = {
  placeholder: string
  onClick: () => void
}

export const MessageForm = ({ placeholder, onClick }: MessageFormProps) => {
  return (
    <>
      <S.Container>
        <Input placeholder={placeholder} />
        <IconButton onClick={onClick} />
      </S.Container>
    </>
  )
}
