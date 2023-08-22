import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage/Homepage'
import { Navbar } from '../components/organisms/Navbar/Navbar'
import { Footer } from '../components/organisms/Footer/Footer'
import App from '../App'
import { HomepageDesktop } from '../pages/HomepageDesktop/HomepageDesktop'

export const Router = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<Homepage ios={true} />} />
                    <Route path='/homepage' element={<HomepageDesktop ios={false}/>} />
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}