import clsx from "clsx"
import { Text } from "../../atoms/Text/Text"
import './style.scss'

type IconTextBar = {
    source: string
    text: string
    emptyBar?: boolean
    ios: boolean
}

export const IconTextBar = ({ source, text, emptyBar, ios }: IconTextBar) => {

    return (

        <div className="icon-text-bar">
            <div className='icon-text-bar__icon-text-container'>
                {ios ?
                    <img className='icon-text-bar__icon' src={source} />
                    :
                    <img className='icon-text-bar__icon' src={source} />
                }
                <Text tag='span' modifier='span-large'>{text}</Text>
            </div>
            <div className='icon-text-bar__bar-container icon-text-bar__bar-container visible-xs'>
                {!emptyBar ?
                    <img className='icon-text-bar__bar icon-text-bar__bar--half' src='/images/icons/Bar.svg' />
                    :
                    <div className={clsx('icon-text-bar__bar icon-text-bar__bar--empty')} />
                }
            </div>
            <div className='icon-text-bar__bar-container icon-text-bar__bar-container visible-xl'>
                {!emptyBar && ios && <img className='icon-text-bar__bar icon-text-bar__bar--half' src='/images/icons/BlueBarXL.jpg' />}
                {!emptyBar && !ios && <img className='icon-text-bar__bar icon-text-bar__bar--half' src='/images/icons/GreenBarXL.jpg' />}
                {emptyBar && <div className={clsx('icon-text-bar__bar icon-text-bar__bar--empty',
                    { 'icon-text-bar__bar--no-ios': !ios })} />}
            </div>
        </div>

    )

}