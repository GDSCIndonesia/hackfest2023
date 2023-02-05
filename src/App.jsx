import { useState } from 'react'
import CountDown from './components/CountDown'
import HackfestDetail from './components/HackfestDetail'

import HackTitle from './components/HackTitle'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import MediaPartner from './components/MediaPartner'
import OrganizerEvent from './components/OrganizerEvent'
import SponsorEvent from './components/SponsorEvent'
import TopWords from './components/TopWords'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HackTitle/>
      <Navbar/>
      <HackfestDetail/>
      <TopWords/>
      <CountDown/>
      <MediaPartner/>
      <SponsorEvent/>
      <OrganizerEvent/>
      <Footer/>
    </>
  )
}

export default App
