import clsx from "clsx"
import { PictureText } from "../../molecules/PictureText/PictureText"
import { TextListWrapper } from "../../molecules/TextListWrapper/TextListWrapper"
import './style.scss'
import { Card } from "../../molecules/Card/Card"
import { CardDetail } from "../../molecules/CardDetails/CardDetails"

type ParagraphListCardProps = {
    alignLeft?: boolean
    cardType?: 'card' | 'card-large'
    source: string
    title: string
    text: string
    textIcon: string[]
}

export const ParagraphListCard = ({ /* alignLeft, */ cardType, source, title, text, textIcon }: ParagraphListCardProps) => {

    return (
        <div className={clsx("paragraph-list-card")}>
            <TextListWrapper
                source={source}
                title={title}
                text={text}
                textIcon={textIcon}
                cardType={cardType}
            >
                <div className={clsx('paragraph-list-card__card-container', { 'paragraph-list-card__card-container--align-to-left': cardType === 'card' })}>
                    {!cardType && <>
                        <PictureText
                            source='/images/pictures/User1.jpg'
                            title='You have a meeting with Surbhi to help her with her portfolio. She got a new pet (Dog named Tiger).'
                        />
                        <PictureText
                            source='/images/pictures/User2.jpg'
                            title='Ripal has recently been to Thailand and she wants to discuss about new Job opportunity.'
                        />
                        <PictureText
                            source='/images/pictures/User3.jpg'
                            title='Prashasti hasn’t responded to your Email from 22 Jan, 2020 Want to check up on her?  Follow up'
                        />
                    </>
                    }
                    {cardType === 'card-large' &&
                        <Card
                            title='Send content around anxiety'
                            text='3 people on the list'
                            paragraph='We all worry and get upset from time to time. It’s a normal part of life, right? 
                                But what happens when that anxiety or anger takes over, and you can’t calm down?'
                            source={[{
                                picture: '/images/pictures/User4.jpg',
                                titleImage: 'Archana Kamath'
                            },
                            {
                                picture: '/images/pictures/User5.jpg',
                                titleImage: 'Surojit Saraswat'
                            },
                            {
                                picture: '/images/pictures/User1.jpg',
                                titleImage: 'Surbhi Gangwar'
                            }]}
                        />
                    }
                    {cardType === 'card' &&
                        <CardDetail
                            source='/images/pictures/User6.jpg'
                            name='Archana Deshmukh'
                            detail='Product Design Consultant'
                            birthday='17 April, 1994'
                            job='Product Design Consultant'
                            event='Went to Amsterdam with parents to visit her brother.'
                        />
                    }
                </div>
            </TextListWrapper>
        </div>
    )

}