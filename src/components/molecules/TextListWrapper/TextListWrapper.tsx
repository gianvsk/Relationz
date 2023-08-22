import './style.scss'
import { CheckText } from "../../atoms/CheckText/CheckText"
import { TextParagraph } from "../../atoms/TextParagraph/TextParagraph"
import clsx from 'clsx'

type TextListWrapperProps = {
    source: string[]
    title: string
    text: string
    textIcon: string[]
    cardType?: 'card' | 'card-large'
    children: React.ReactNode
    ios: boolean
    swapColor: boolean
}

export const TextListWrapper = ({ source, title, text, textIcon, children, cardType, ios, swapColor }: TextListWrapperProps) => {

    return (

        <div className="text-list-wrapper">

            <img
                className={clsx('text-list-wrapper__icon', 'visible-xs', {
                    'text-list-wrapper__icon--spaced': cardType === 'card',
                    'text-list-wrapper__icon--start': cardType === 'card-large'
                })}
                src={source[0]} />

            <img
                className={clsx('text-list-wrapper__icon', 'visible-xl', {
                    'text-list-wrapper__icon--spaced': cardType === 'card-large',
                    'text-list-wrapper__icon--start': cardType === 'card'
                })}
                src={ios || swapColor ? source[0] : source[1]} />

            <div className={clsx('text-list-wrapper__container',
                {
                    'text-list-wrapper__container--centered': cardType === 'card-large',
                    'text-list-wrapper__container--row': cardType === 'card'
                })}>

                <div className='text-list-wrapper__texts'>
                    <TextParagraph title={title} text={text} />
                    <ul className='text-list-wrapper__list'>
                        {textIcon.map((el, index) =>
                            <>
                                <li className='text-list-wrapper__list-item visible-xs'>
                                    <CheckText key={index} text={el} color='green' />
                                </li>
                                <li className='text-list-wrapper__list-item visible-xl'>
                                    <CheckText key={index} text={el} color={ios ? 'green' : 'blue'} />
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                <div className="text-list-wrapper__children">
                    {children}
                </div>
            </div>
        </div>

    )

}