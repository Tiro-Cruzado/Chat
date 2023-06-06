import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Input } from './components/Input'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Input placeholder="Digite seu nome de usuário" />
      </ThemeProvider>
    </>
  )
}

export default App
