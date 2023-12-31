/* import { useDevice } from '../../../contexts/DeviceContext'; */
import { useMemo } from 'react';
import { Text } from '../Text/Text';
import './style.scss'

type CheckTextProps = {
    text: string
    color: 'grey' | 'green' | 'blue' | 'checkbox'
}

export const CheckText = ({ text, color}: CheckTextProps) => {

    const setColor = useMemo(() => {
        switch (color) {
            case 'grey':
                return '/images/icons/Vector.svg'
            case 'green':
                return '/images/icons/Vector1.svg'
            case 'blue':
                return '/images/icons/Vector2.svg'
        }
    }, [color])

    return (
        <div className="check-text">

            {color === 'checkbox' &&
                <div className='check-text__checkbox'>
                    <img className='check-text__image check-text__image--checkbox' src='/images/icons/Vector1.svg' />
                </div>
            }

            {color !== 'checkbox' &&
                <img className='check-text__image' src={setColor} />
            }

            <Text tag='span' modifier='span-icon-small'>{text}</Text>
        </div>
    )

}