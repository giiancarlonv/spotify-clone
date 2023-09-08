import { useState } from 'react'
import Homepage from './components/Homepage'
import Header from './components/Header'
import Playlist from './components/playlist/Playlist'
import Footer from './components/Footer'
import PlayingMusic from './components/playlist/PlayingMusic'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlayingMusic />
      
    </>
  )
}

export default App
