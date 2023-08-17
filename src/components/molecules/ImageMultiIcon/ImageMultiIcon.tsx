import { IconTextBar } from "../IconTextBar/IconTextBar"
import './style.scss'

type MultiIconProps = {
    ios: boolean
}

export const MultiIcon = ({ios} : MultiIconProps) => {

    return (
        <div className="image-multi-icon">
            <div className='image-multi-icon__icon-container image-multi-icon__icon-container--visible-xs'>
                    <IconTextBar source='/images/icons/BlueBell.svg' text='Get Reminders' ios={ios}/>
                    <IconTextBar source='/images/icons/Arrows.svg' text='Sync Everything' emptyBar={true} ios={ios}/>
                    <IconTextBar source='/images/icons/Channel.svg' text='The multichannel' emptyBar={true} ios={ios}/>
            </div>

            <div className='image-multi-icon__icon-container image-multi-icon__icon-container--visible-xl'>
                <div className='image-multi-icon__icon-text'>
                    {ios ? <IconTextBar source='/images/icons/BlueBell.svg' text='Get Reminders' ios={ios}/> :
                        <IconTextBar source='/images/icons/GreenBell.svg' text='Get Reminders' ios={ios}/>}
                </div>
                <div className='image-multi-icon__icon-text'>
                    {ios ? <IconTextBar source='/images/icons/Arrows.svg' text='Sync Everything' emptyBar={true} ios={ios}/> :
                        <IconTextBar source='/images/icons/GreenArrows.svg' text='Sync Everything' emptyBar={true} ios={ios}/>}
                </div>
                <div className='image-multi-icon__icon-text'>
                    {ios ? <IconTextBar source='/images/icons/Channel.svg' text='The multichannel' emptyBar={true} ios={ios}/> :
                        <IconTextBar source='/images/icons/LinkGreen.svg' text='The multichannel' emptyBar={true} ios={ios}/>}
                </div>
            </div>
        </div>
    )

}