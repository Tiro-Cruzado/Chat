import styled, { DefaultTheme } from 'styled-components'

type FontStyleProps = {
  fontSize: keyof DefaultTheme['typography']['fontSizes']
  color: keyof DefaultTheme['colors']
}

export const Text = styled.div<FontStyleProps>`
  font-size: ${({ theme, fontSize }) => theme.typography.fontSizes[fontSize]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: 'Inter', sans-serif;
`
