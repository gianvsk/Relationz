import { useDevice } from '../../../contexts/DeviceContext';
import { Text } from '../Text/Text';
import './style.scss'

type IconTextProps = {
    text: string
    active?: boolean
    checkBox?: boolean
}

export const IconText = ({ text, active, checkBox }: IconTextProps) => {

    const {ios} = useDevice()

    return (
        <div className="icon-text">
            {checkBox &&
                <div className='icon-text__checkbox'>
                    <img className='icon-text__image' src='/images/icons/Vector1.svg' />
                </div>}
            {!active && !checkBox && <img className='icon-text__image' src='/images/icons/Vector.svg' />}
            {active && ios && !checkBox && <img className='icon-text__image' src='/images/icons/Vector1.svg' />}
            {active && !ios && !checkBox && <img className='icon-text__image' src='/images/icons/Vector2.svg' />}
            <Text tag='span' modifier='span-icon-small'>{text}</Text>
        </div>
    )

}