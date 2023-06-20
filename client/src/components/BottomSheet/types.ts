import React from 'react'

type BottomSheetProps = {
  /**
   * Propriedade que permite identificar se o componente está aberto ou fechado.
   */
  isOpen?: boolean

  /**
   * Conteúdo que será recebido dentro da Modal/BottomSheet.
   */
  children?: React.ReactNode

  /**
   * Cabeçalho onde é mais habitual passar tags de texto ou título.
   */
  head?: React.ReactNode

  /**
   * Campo onde será necessário ser passado uma funcionalidade que
   * poderá para alterar o estado do componente.
   */
  onDimiss?: () => void
}

type ContainerBottomSheetProps = {
  isOpen: boolean
}

export type { BottomSheetProps, ContainerBottomSheetProps }
