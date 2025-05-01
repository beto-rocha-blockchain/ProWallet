import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiConfig, createConfig } from 'wagmi'
import { http } from 'viem'
import { mainnet } from 'wagmi/chains'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import App from './App.tsx'
import '@rainbow-me/rainbowkit/styles.css'

const { connectors } = getDefaultWallets({
  appName: 'ProWallet',
  projectId: 'YOUR_PROJECT_ID', // Gere em https://cloud.walletconnect.com
})

const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)
