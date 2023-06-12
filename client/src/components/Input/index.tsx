import * as S from './style'

type InputProps = {
  placeholder: string
}

export function Input({ placeholder }: InputProps) {
  return (
    <S.Input
      type="text"
      spellCheck={'false'}
      placeholder={placeholder}
    ></S.Input>
  )
}
