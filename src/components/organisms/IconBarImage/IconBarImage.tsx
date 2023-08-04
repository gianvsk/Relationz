import { TitleSearchbar } from "../TitleSearchbar/TitleSearchbar"
import { MultiIcon } from "../../molecules/ImageMultiIcon/ImageMultiIcon"
import './style.scss'


export const IconBarImage = () => {

    return (
        <div className="icon-bar-image">
            <div className='icon-bar-image__title-wrapper'>
                <TitleSearchbar />
            </div>
            <img className='icon-bar-image__image' src='/images/pictures/Phone.png' />
            <div className='icon-bar-image__multi-icons'>
                <MultiIcon />
            </div>
        </div>
    )

}