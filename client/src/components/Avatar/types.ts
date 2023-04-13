import { FlattenSimpleInterpolation } from 'styled-components'
type AvatarProps = {
  // O componente irá receber uma propriedade de arredondamento
  isRound?: boolean

  /* O componente irá receber uma propriedade de tamanho,
  que poderá variar entre Samll e Medium */
  size?: 'sm' | 'md'

  /**
   * Também será possível definir o status do Avatar
   */
  status?: string

  /**
   * O avatar a ser passado será exibido dinaminacamente através de uma URL
   */
  src?: string
}

type RequiredAvatarProps = Required<AvatarProps>
type SizeStyles = Record<
  RequiredAvatarProps['size'],
  FlattenSimpleInterpolation
>

type WrapperProps = {
  size: RequiredAvatarProps['size']
  status?: string
  isRound: boolean
}

export type { AvatarProps, SizeStyles, RequiredAvatarProps, WrapperProps }
