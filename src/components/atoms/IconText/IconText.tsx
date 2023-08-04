import { Text } from '../Text/Text';
import './style.scss'

type IconTextProps = {
    text: string;
    iconLight?: boolean;
    large?: boolean
    checkBox?: boolean
}

export const IconText = ({ text, iconLight, large, checkBox }: IconTextProps) => {

    return (
        <div className="icon-text">
            {checkBox &&
                <div className='icon-text__checkbox'>
                    <img className='icon-text__image' src='/images/icons/Vector1.svg' />
                </div>}
            {!iconLight && !checkBox && <img className='icon-text__image' src='/images/icons/Vector.svg' />}
            {iconLight && !checkBox && <img className='icon-text__image' src='/images/icons/Vector1.svg' />}
            <Text tag='span' modifier={large ? 'span-icon' : 'span-icon-small'}>{text}</Text>
        </div>
    )

}