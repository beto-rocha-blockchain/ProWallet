// src/components/BalancePanel.tsx
import { useAccount, useBalance } from 'wagmi'

export function BalancePanel() {
  const { address, isConnected } = useAccount()
  const { data, isLoading } = useBalance({ address })

  if (!isConnected) return <p>Conecte sua carteira</p>
  if (isLoading) return <p>Carregando saldo...</p>

  return (
    <div className="bg-white text-black rounded-xl p-4 shadow-lg max-w-sm mx-auto my-4">
      <h2 className="text-lg font-semibold mb-2">Saldo</h2>
      <p className="text-xl">{data?.formatted} {data?.symbol}</p>
    </div>
  )
}
