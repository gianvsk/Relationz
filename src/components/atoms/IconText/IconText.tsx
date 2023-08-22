import { Text } from '../Text/Text'
import './style.scss'

type IconTextProps = {
    source: string
    text: string
}

export const IconText = ({source, text}: IconTextProps) => {

    return (
        <div className='icon-text'>
            <img className='icon-text__icon' src={source}/>
            <Text tag='span' modifier='span-micro'>{text}</Text>
        </div>
    )

}