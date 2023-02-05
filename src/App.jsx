import { useState } from 'react'
import HackfestDetail from './components/HackfestDetail'

import HackTitle from './components/HackTitle'
import Navbar from './components/layout/Navbar'
import TopWords from './components/TopWords'
import CountDown from './components/CountDown'
import Timeline from './components/Timeline'
import Speaker from './components/Speaker'
import Mentor from './components/Mentor'
import Faq from './components/Faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HackTitle/>
      <Navbar/>
      <HackfestDetail/>
      <TopWords/>
      {/* <CountDown/> */}
      <Timeline/>
      <Speaker/>
      <Mentor/>
      <Faq/>
    </>
  )
}

export default App
