import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Cabecalho } from '../src/components/Cabecalho'
import { ThemeProvider } from '@mui/material'
import tema from '../src/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Cabecalho />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
