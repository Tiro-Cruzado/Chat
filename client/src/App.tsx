import { RouterProvider } from 'react-router-dom'
import { routes } from './router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={routes} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
