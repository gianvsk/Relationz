import './App.css'
import { Navbar } from './components/organisms/Navbar/Navbar'
import { DeviceProvider } from './contexts/DeviceContext'
import { Homepage } from './pages/Homepage/Homepage'

function App() {

  return (
    <>
      <DeviceProvider>
        <Navbar />
        <Homepage />
      </DeviceProvider>
    </>
  )
}

export default App
