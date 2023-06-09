import { RouterProvider } from 'react-router-dom'
import { routes } from './router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
// import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  )
}

export default App
