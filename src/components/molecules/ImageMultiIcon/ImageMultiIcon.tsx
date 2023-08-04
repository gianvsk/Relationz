import { IconTextBar } from "../IconTextBar/IconTextBar"
import './style.scss'

type MultiIcon = {
    source1: string
    source2: string
    source3: string
}

export const MultiIcon = () => {

    return (
        <div className="image-multi-icon">
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