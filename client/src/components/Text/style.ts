import styled from 'styled-components'

const FONT_SIZE = {
  'x-small': '8px',
  small: '12px',
  medium: '18px',
  large: '24px',
} as const

const COLOR = {
  white: '#FFFFFF',
  gray: '#B9B6BE',
  'dark-gray': '#AAAAAA',
  'dark-purple': '#574969',
} as const

export type FontStyleProps = {
  fontSize: keyof typeof FONT_SIZE
  color: keyof typeof COLOR
}

export const Text = styled.div<FontStyleProps>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`
