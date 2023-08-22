import clsx from "clsx"
import { TextListWrapper } from "../../molecules/TextListWrapper/TextListWrapper"
import './style.scss'

type ParagraphListCardProps = {
    alignLeft?: boolean
    cardType?: 'card' | 'card-large' 
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
                    {!cardType &&
                        <>
                            <img className='paragraph-list-card__ring paragraph-list-card__ring--ring1 visible-xs' src='/images/icons/RingXs3.svg' />
                            <img className='paragraph-list-card__ring paragraph-list-card__ring--ring1 visible-xl' src='/images/icons/RingRedLarge.svg' />
                            {children}
                        </>
                    }

                    {cardType === 'card-large' &&
                        <>
                            <img className='paragraph-list-card__ring paragraph-list-card__ring--ring3 visible-xs' src='/images/icons/RingXs5.svg' />
                            <img className='paragraph-list-card__ring paragraph-list-card__ring--ring3 visible-xl' src='/images/icons/Ring4.1.svg' />
                            {children}
                            </>
                    }

                    {cardType === 'card' &&
                        <div className='paragraph-list-card__container'>
                            {children}
                            {ios ? (
                                <>
                                    <img className='paragraph-list-card__ring paragraph-list-card__ring--ring2 visible-xs' src='/images/icons/RingXs4.svg' />
                                    <img className='paragraph-list-card__ring paragraph-list-card__ring--ring2-ios visible-xl' src='/images/icons/Ring4.svg' />
                                </>
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