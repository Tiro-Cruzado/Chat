import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import Header from './components/Header'
import InfoGroup from './components/InfoGroup'
import ProfileInfo from './components/ProfileInfo'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header
          childrenLeft={<InfoGroup />}
          childrenRight={<ProfileInfo />}
          isFloating={true}
        ></Header>
      </ThemeProvider>
    </>
  )
}

export default App
