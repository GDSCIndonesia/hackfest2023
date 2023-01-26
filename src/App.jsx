import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ComingSoon from './components/ComingSoon'

ComingSoon

function App() {
  const [count, setCount] = useState(0)

  return (
    <ComingSoon/>
  )
}

export default App
