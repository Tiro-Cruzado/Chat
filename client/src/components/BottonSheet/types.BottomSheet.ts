import React from 'react'

type BottomSheetProps = {
  /**
   * Propriedade que permite identificar se o componente está aberto ou fechado
   */
  isOpen?: boolean

  /**
   *
   */
  children?: React.ReactNode

  /**
   *
   */
  head?: React.ReactNode

  /**
   *
   */
  toClose?: () => void
}

type ContainerBottomSheetProps = {
  isOpen: boolean
}

type ContainerWrapperProps = {
  isOpem: boolean
}

export type {
  BottomSheetProps,
  ContainerBottomSheetProps,
  ContainerWrapperProps,
}
