import { RouterProvider } from 'react-router-dom'
import { routes } from './router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import Header from './components/Header'
import InfoGroup from './components/InfoGroup'
import ProfileInfo from './components/ProfileInfo'
import { GlobalStyle } from './styles/themes/global'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header
          childrenLeft={<InfoGroup />}
          childrenRight={<ProfileInfo />}
          isFloating={true}
        ></Header>
        <RouterProvider router={routes} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
