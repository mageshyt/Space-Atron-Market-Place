import '../styles/globals.css'
import { SpaceAtronProvider } from '../context/SpaceAtronContext'
function MyApp({ Component, pageProps }) {
  return (
    <SpaceAtronProvider>
      <Component {...pageProps} />
    </SpaceAtronProvider>
  )
}

export default MyApp
