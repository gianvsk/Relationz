/* import { useDevice } from '../../../contexts/DeviceContext'; */
import { Text } from '../Text/Text';
import './style.scss'

type IconTextProps = {
    text: string
    color: 'grey' | 'green' | 'blue' | 'checkbox'
}

export const IconText = ({ text, color }: IconTextProps) => {

    /* const { ios } = useDevice() */

    return (
        <div className="icon-text">

            {color === 'checkbox' && 
                <div className='icon-text__checkbox'>
                    <img className='icon-text__image icon-text__image--checkbox' src='/images/icons/Vector1.svg' />
                </div> 
            }
            {color === 'grey' && <img className='icon-text__image' src='/images/icons/Vector.svg' />}
            {color === 'green' && <img className='icon-text__image' src='/images/icons/Vector1.svg' />}
            {color === 'blue' && <img className='icon-text__image' src='/images/icons/Vector2.svg' />}
            <Text tag='span' modifier='span-icon-small'>{text}</Text>
        </div>
    )

}