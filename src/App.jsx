import { useState } from 'react'
import Homepage from './components/Homepage'
import './styles/styles.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
    </>
  )
}

export default App
