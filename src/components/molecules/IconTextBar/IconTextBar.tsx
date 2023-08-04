import { Text } from "../../atoms/Text/Text"
import './style.scss'

type IconTextBar = {
    source: string
    text: string
    emptyBar?: boolean
}

export const IconTextBar = ({ source, text, emptyBar }: IconTextBar) => {

    return (

        <div className="icon-text-bar">
            <div className='icon-text-bar__icon-text-container'>
                <img className='icon-text-bar__icon' src={source} />
                <Text tag='span' modifier='span-large'>{text}</Text>
            </div>
            <div className='icon-text-bar__bar-container icon-text-bar__bar-container--small'>
                {!emptyBar && <img className='icon-text-bar__bar icon-text-bar__bar--half' src='/images/icons/Bar.svg' />}
                {emptyBar && <div className='icon-text-bar__bar icon-text-bar__bar--empty' />}
            </div>
            <div className='icon-text-bar__bar-container icon-text-bar__bar-container--large'>
                {!emptyBar && <img className='icon-text-bar__bar icon-text-bar__bar--half' src='/images/pictures/BarXl.svg' />}
                {emptyBar && <div className='icon-text-bar__bar icon-text-bar__bar--empty' />}
            </div>
        </div>

    )

}