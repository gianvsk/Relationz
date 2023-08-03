import { Text } from '../Text/Text';
import './style.scss'

type IconTextProps = {
    text: string;
    iconLight? : boolean;
    large?: boolean
}

export const IconText = ({text,iconLight, large} : IconTextProps) => {

    return (
        <div className="icon-text">
            {!iconLight && <img className='icon-text__image' src='/images/icons/Vector.svg'/>}
            {iconLight && <img className='icon-text__image' src='/images/icons/Vector1.svg'/>}
            <Text tag='span' modifier={large? 'span-icon' : 'span-icon-small'}>{text}</Text> 
        </div>
    )

}