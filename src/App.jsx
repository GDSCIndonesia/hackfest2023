import { useState } from 'react'
import HackfestDetail from './components/HackfestDetail'

import HackTitle from './components/HackTitle'
import Navbar from './components/layout/Navbar'
import TopWords from './components/TopWords'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HackTitle/>
      <Navbar/>
      <HackfestDetail/>
      <TopWords/>
    </>
  )
}

export default App
