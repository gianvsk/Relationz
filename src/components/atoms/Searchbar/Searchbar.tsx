import { Button } from "../Button/Button"
import './style.scss'

type SearchbarProps = {
    ios: boolean
} 

export const Searchbar = ({ios} : SearchbarProps) => {

    return (
        <div className="searchbar">
            <input type='text' id='searchbar' name='searchbar' className='searchbar__input' placeholder="Email id"></input>
            <Button text='Try it for free' size='button-lg' ios={!ios}/>
        </div>
    )

}