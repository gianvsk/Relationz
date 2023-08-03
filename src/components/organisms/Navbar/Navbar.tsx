import { Text } from "../../atoms/Text/Text"
import './style.scss'

export const Navbar = () => {

    return (

        <div className="navbar">
            <Text tag='h1' modifier='logo'>Relationz</Text>
            <a className='navbar__burger'><img src='/images/icons/BurgerMenu.svg'/></a>
        </div>

    )

}