import { BalancePanel } from './components/BalancePanel'
import { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useBalance } from 'wagmi'
import styled from '@emotion/styled'



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right, #6a11cb, #2575fc); // Roxo e Azul
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const BalanceDisplay = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`

function App() {
  const { isConnected, address } = useAccount()  // Obtém a conta conectada
  const { data: balance, isLoading } = useBalance({
    address, // Passa o endereço da conta conectada
  })

  return (
    <Container>
      <Title>ProWallet</Title>
      <ConnectButton />
      {isConnected && address && !isLoading && (
        <BalanceDisplay>
          Saldo: {balance?.formatted} {balance?.symbol}
        </BalanceDisplay>
      )}
      {isLoading && <BalanceDisplay>Carregando saldo...</BalanceDisplay>}
    </Container>
  )
}

export default App
