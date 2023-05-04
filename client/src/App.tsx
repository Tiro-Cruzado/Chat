import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default'
import { Text } from './components/Text/style'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Text fontSize="large" color="dark-gray" as={'h1'}>
          Olá mundo
        </Text>
      </ThemeProvider>
    </>
  )
}

export default App
