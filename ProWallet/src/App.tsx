import { ConnectButton } from '@rainbow-me/rainbowkit'
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

function App() {
  return (
    <Container>
      <Title>ProWallet</Title>
      <ConnectButton />
    </Container>
  )
}

export default App
