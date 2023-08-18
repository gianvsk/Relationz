import clsx from "clsx"
/* import { PictureText } from "../../molecules/PictureText/PictureText" */
import { TextListWrapper } from "../../molecules/TextListWrapper/TextListWrapper"
import './style.scss'
/* import { Card } from "../../molecules/Card/Card"
import { CardDetail } from "../../molecules/CardDetails/CardDetails"
import { Text } from "../../atoms/Text/Text" */

type ParagraphListCardProps = {
    alignLeft?: boolean
    cardType: 'default' | 'card' | 'card-large' 
    source: string[]
    title: string
    text: string
    textIcon: string[]
    ios: boolean
    children: React.ReactNode
}

export const ParagraphListCard = ({ cardType, source, title, text, textIcon, ios, children, alignLeft = false }: ParagraphListCardProps) => {

    return (
        <section className={clsx("paragraph-list-card")}>
            <TextListWrapper
                source={source}
                title={title}
                text={text}
                textIcon={textIcon}
                cardType={cardType}
                ios={ios}
                swapColor={alignLeft}
            >
                <div className={clsx('paragraph-list-card__card-container', { 'paragraph-list-card__card-container--align-to-left': cardType === 'card' })}>
                    {cardType === 'default' &&
                        <div className='paragraph-list-card__card'>
                            <img className='paragraph-list-card__ring paragraph-list-card__ring--ring1 visible-xs' src='/images/icons/RingXs3.svg' />
                            <img className='paragraph-list-card__ring paragraph-list-card__ring--ring1 visible-xl' src='/images/icons/Ring3.svg' />
                            {children}
                        </div>
                    }

                    {cardType === 'card-large' &&
                        <div className='paragraph-list-card__card'>
                            <img className='paragraph-list-card__ring paragraph-list-card__ring--ring3 visible-xs' src='/images/icons/RingXs5.svg' />
                            <img className='paragraph-list-card__ring paragraph-list-card__ring--ring3 visible-xl' src='/images/icons/Ring4.1.svg' />
                            {children}
                        </div>
                    }

                    {cardType === 'card' &&
                        <div className='paragraph-list-card__container'>
                            {children}
                            {ios ? (
                                <div className='paragraph-list-card__ring-container'>
                                    <img className='paragraph-list-card__ring paragraph-list-card__ring--ring2 visible-xs' src='/images/icons/RingXs4.svg' />
                                    <img className='paragraph-list-card__ring paragraph-list-card__ring--ring2-ios visible-xl' src='/images/icons/Ring4.svg' />
                                </div>
                            ) :
                                <img className='paragraph-list-card__ring paragraph-list-card__ring--ring2 visible-xl' src='/images/icons/RingDesktop3.svg' />
                            }
                        </div>
                    }
                </div>
            </TextListWrapper>
        </section>
    )

}