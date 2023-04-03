import HackTitle from './components/HackTitle'
import Navbar from './components/layout/Navbar'
import HackfestDetail from './components/HackfestDetail'
import TopWords from './components/TopWords'
import CountEvent from './components/CountEvent'
import Timeline from './components/Timeline'
import Prize from './components/Prize'
import SessionTalk from './components/SessionTalk'
import Speaker from './components/Speaker'
import Mentor from './components/Mentor'
import MediaPartner from './components/MediaPartner'
import SponsorEvent from './components/SponsorEvent'
import Faq from './components/Faq'
import JoinDiscord from './components/JoinDiscord'
import OrganizerEvent from './components/OrganizerEvent'
import Footer from './components/layout/Footer'
import AlertHead from './components/AlertHead'
import ConfettiExp from './components/ConfettiExp'


function App() {
  return (
    <>
      {/* <AlertHead/> */}
      <ConfettiExp/>
      <HackTitle/>
      <Navbar/>
      <HackfestDetail/>
      <TopWords/>
      <CountEvent/>
      <Timeline/>
      <Prize/>
      <SessionTalk/>
      <Speaker/>
      <Mentor/>
      <SponsorEvent/>
      <MediaPartner/>
      <OrganizerEvent/>
      <JoinDiscord/>
      <Faq/>
      <Footer />
    </>
  );
}

export default App;
