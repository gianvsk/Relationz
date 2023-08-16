import { useDevice } from "../../../contexts/DeviceContext"
import { Button } from "../../atoms/Button/Button"
import { Text } from "../../atoms/Text/Text"
import './style.scss'

export const Navbar = () => {

    const {ios} = useDevice()

    return (

        <div className="navbar">
            <Text tag='h1' modifier='logo'>Relationz</Text>
            <a className='navbar__burger'><img src='/images/icons/BurgerMenu.svg' /></a>
            <img className='navbar__ring' src='/images/icons/Ring1.svg'  />
            <div className='navbar__links-button'>
                <div className='navbar__links'>
                    <Text tag='a'>Services</Text>
                    <Text tag='a'>Enterprise</Text>
                    <Text tag='a'>Pricing</Text>
                    <Text tag='a'>Login</Text>
                </div>
            </div>
            <div className='navbar__button'>
                    <Button text='Try it for free' size={ios ? 'button-lg-empty-blue' : 'button-lg-empty-green'}/>
                </div>
        </div>

    )

}