
import './index.css'
import Navbar from './components/Navbar'
import { Homepage } from './components/Homepage'
import { Weare } from './components/Weare'
import { Readmore } from './components/Readmore'
import { Lookout } from './components/Lookout'
import { Features } from './components/Features'
import Cards from './components/Cards'
import Ready from './components/Ready'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <Homepage />
      <Weare />
      <Readmore />
      <Lookout />
      <Features />
      <Cards />
      <Ready />
      <Footer />
      
    </>
  )
}

export default App
