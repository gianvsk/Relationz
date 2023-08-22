import './App.css'
import { Footer } from './components/organisms/Footer/Footer'
import { Navbar } from './components/organisms/Navbar/Navbar'
import { DeviceProvider } from './contexts/DeviceContext'
import { Homepage } from './pages/Homepage/Homepage'
/* import { HomepageDesktop } from './pages/HomepageDesktop/HomepageDesktop' */

function App() {

  return (
    <>
      <DeviceProvider>
        <Navbar />
        <Homepage ios={true}/>
{/*         <HomepageDesktop ios={false}/> */}
        <Footer/>
      </DeviceProvider>
    </>
  )
}

export default App
