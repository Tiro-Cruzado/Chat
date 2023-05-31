import React from 'react'

type ModalProps = {
  /**
   * Poderá receber um children do tipo componente.
   */
  children?: React.ReactNode

  /**
   * No cabeçalho será possível passar um componente. O mais apropriado seriam tags de título.
   */
  head?: React.ReactNode

  /**
   * Estado no qual a modal poderá se encontrar. Aberta ou fechada.
   */
  isOpen?: boolean

  /**
   * Propriedade retornará uma função que poderá controlar o estado da Modal.
   */
  onDimiss?: () => void
}

type ContainerModalProps = {
  isOpen?: boolean
}

export type { ModalProps, ContainerModalProps }
