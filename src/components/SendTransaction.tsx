// src/components/SendTransaction.tsx
import { useState } from 'react'
import { useSendTransaction, useAccount } from 'wagmi'
import { parseEther } from 'viem'

export function SendTransaction() {
  const [value, setValue] = useState('0.001')
  const [to, setTo] = useState('')
  const { isConnected } = useAccount()

  const { sendTransaction, isPending, isSuccess } = useSendTransaction()

  if (!isConnected) return <p>Conecte sua carteira</p>

  return (
    <div className="bg-white text-black rounded-xl p-4 shadow-lg max-w-sm mx-auto my-4 space-y-2">
      <h2 className="text-lg font-semibold">Enviar Transação</h2>
      <input
        className="border rounded p-2 w-full"
        placeholder="Endereço de destino"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        className="border rounded p-2 w-full"
        placeholder="Valor em ETH"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded w-full"
        disabled={isPending || !to || !value}
        onClick={() => sendTransaction({
          to: to as `0x${string}`,
          value: parseEther(value || '0'),
        })}
      >
        {isPending ? 'Enviando...' : 'Enviar'}
      </button>
      {isSuccess && <p className="text-green-600">Transação enviada com sucesso!</p>}
    </div>
  )
}
