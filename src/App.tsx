import { ConnectButton } from '@rainbow-me/rainbowkit'
import { BalancePanel } from './components/BalancePanel'
import { SendTransaction } from './components/SendTransaction'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 to-blue-600 text-white font-sans">
      <h1 className="text-4xl font-bold mb-4">ProWallet</h1>
      <ConnectButton />
      <BalancePanel />
      <SendTransaction />
    </div>
  )
}

export default App
