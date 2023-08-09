import './style.scss'
import { IconText } from "../../atoms/IconText/IconText"
import { TextParagraph } from "../../atoms/TextParagraph/TextParagraph"
import clsx from 'clsx'

type TextListWrapperProps = {
    source: string
    title: string
    text: string
    textIcon: string[]
    cardType?: string
    children: React.ReactNode
}

export const TextListWrapper = ({ source, title, text, textIcon, children, cardType }: TextListWrapperProps) => {

    return (

        <div className="text-list-wrapper">
            <img className={clsx('text-list-wrapper__icon', 
                            {'text-list-wrapper__icon--spaced': cardType === 'card-large',
                             'text-list-wrapper__icon--start': cardType === 'card'})} src={source} />
            <div className={clsx('text-list-wrapper__container', 
                            {'text-list-wrapper__container--centered' : cardType === 'card-large',
                             'text-list-wrapper__container--row' : cardType === 'card'} )}>
                <div className='text-list-wrapper__texts'>
                    <TextParagraph title={title} text={text} />
                    <ul className='text-list-wrapper__list'>
                        {textIcon.map((el, index) => <>
                            <li className='text-list-wrapper__list-item'>
                                <IconText key={index} text={el} iconLight={true} large={true} />
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