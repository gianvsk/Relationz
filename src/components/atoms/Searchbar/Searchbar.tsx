import { useDevice } from "../../../contexts/DeviceContext"
import { Button } from "../Button/Button"
import './style.scss'

export const Searchbar = () => {

    const {ios} = useDevice()

    return (
        <div className="searchbar">
            <input type='text' className='searchbar__input' placeholder="Email id"></input>
            <Button text='Try it for free' size='button-lg' ios={!ios}/>
        </div>
    )

}