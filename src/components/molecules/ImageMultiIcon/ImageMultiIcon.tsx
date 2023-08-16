import { useDevice } from "../../../contexts/DeviceContext"
import { IconTextBar } from "../IconTextBar/IconTextBar"
import './style.scss'

export const MultiIcon = () => {

    const {ios} = useDevice()

    return (
        <div className="image-multi-icon">
            <div className='image-multi-icon__icon-container'>
                <div className='image-multi-icon__icon-text'>
                    {ios && <IconTextBar source='/images/icons/BlueBell.svg' text='Get Reminders' />}
                    {!ios && <IconTextBar source='/images/icons/GreenBell.svg' text='Get Reminders' />}
                </div>
                <div className='image-multi-icon__icon-text'>
                    {ios && <IconTextBar source='/images/icons/Arrows.svg' text='Sync Everything' emptyBar={true} />}
                    {!ios && <IconTextBar source='/images/icons/GreenArrows.svg' text='Sync Everything' emptyBar={true}/>}
                </div>
                <div className='image-multi-icon__icon-text'>
                    {ios && <IconTextBar source='/images/icons/Channel.svg' text='The multichannel' emptyBar={true} />}
                    {!ios && <IconTextBar source='/images/icons/LinkGreen.svg' text='The multichannel' emptyBar={true} />}
                </div>
            </div>
        </div>

    )

}