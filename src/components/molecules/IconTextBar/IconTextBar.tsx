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
                <img className='icon-text-bar__icon' src={source} />
                <Text tag='span' modifier='span-large'>{text}</Text>
            </div>

            {/* <div className='icon-text-bar__bar-container visible-xs'> */}
                <img className={clsx(
                    'icon-text-bar__bar icon-text-bar__bar--half visible-xs', {
                    'icon-text-bar__bar icon-text-bar__bar--empty visible-xs': emptyBar
                })}
                    src={!emptyBar ? '/images/icons/Bar.svg' : ''} />
            {/* </div> */}

{/*             <div className='icon-text-bar__bar-container icon-text-bar__bar-container visible-xl'> */}
                {!emptyBar &&
                    <img className='icon-text-bar__bar icon-text-bar__bar--half visible-xl'
                        src={ios ? '/images/icons/BlueBarXL.jpg' : '/images/icons/GreenBarXL.jpg'} />}

                {emptyBar &&
                    <div className={clsx(
                        'icon-text-bar__bar icon-text-bar__bar--empty visible-xl', {
                        'icon-text-bar__bar--no-ios visible-xl': !ios
                    })} />}
            </div>
        /* </div> */

    )

}