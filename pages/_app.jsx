import '../styles/globals.css'
import { SpaceAtronProvider } from '../context/SpaceAtronContext'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

function MyApp({ Component, pageProps }) {
  return (
      <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
    <SpaceAtronProvider>
      <Component {...pageProps} />
    </SpaceAtronProvider>
      </ThirdwebProvider>
  )
}

export default MyApp
