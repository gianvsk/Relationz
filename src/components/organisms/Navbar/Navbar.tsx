import { Button } from "../../atoms/Button/Button"
import { Text } from "../../atoms/Text/Text"
import './style.scss'

export const Navbar = () => {

    return (

        <div className="navbar">
            <Text tag='h1' modifier='logo'>Relationz</Text>
            <a className='navbar__burger'><img src='/images/icons/BurgerMenu.svg' /></a>
            <div className='navbar__links-button'>
                <div className='navbar__links'>
                    <Text tag='a'>Services</Text>
                    <Text tag='a'>Enterprise</Text>
                    <Text tag='a'>Pricing</Text>
                    <Text tag='a'>Login</Text>
                </div>
                <div className='navbar__button'>
                    <Button text='Try it for free' size='button-md' />
                </div>
            </div>
        </div>

    )

}