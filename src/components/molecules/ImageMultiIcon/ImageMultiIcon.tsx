import { IconTextBar } from "../IconTextBar/IconTextBar"
import './style.scss'

type ImageMultiIcon = {
    source: string
}

export const ImageMultiIcon = () => {

    return (

        <div className="image-multi-icon">
            <img className='image-multi-icon__image' src='/images/pictures/Phone.png' />
            <div className='image-multi-icon__icon-container'>
                <div className='image-multi-icon__icon-text'>
                    <IconTextBar source='/images/icons/BlueBell.svg' text='Get Reminders' />
                </div>
                <div className='image-multi-icon__icon-text'>
                    <IconTextBar source='/images/icons/Arrows.svg' text='Sync Everything' emptyBar={true} />
                </div>
                <div className='image-multi-icon__icon-text'>
                    <IconTextBar source='/images/icons/Channel.svg' text='The multichannel' emptyBar={true} />
                </div>
            </div>
        </div>

    )

}