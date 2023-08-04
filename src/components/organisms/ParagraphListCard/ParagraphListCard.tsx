import clsx from "clsx"
import { PictureText } from "../../molecules/PictureText/PictureText"
import { TextListWrapper } from "../../molecules/TextListWrapper/TextListWrapper"
import './style.scss'

type ParagraphListCardProps = {
    alignLeft?: boolean
}

export const ParagraphListCard = ({alignLeft} : ParagraphListCardProps) => {

    return (
        <div className={clsx("paragraph-list-card",'paragraph-list-card--align-right', {'paragraph-list-card--align-left' : alignLeft })}>
            <div className="paragraph-list-card__text">
                <TextListWrapper
                    source='/images/icons/GreenBell.svg'
                    title='Get reminders to follow up'
                    text='We remind you of everything important and track everything that’s important to your important ones so you always 
                stay connected. We only tell you the details when you need them the most.'
                    textIcon1='Birthdays'
                    textIcon2='Business Meetings'
                    textIcon3='Friends & Family'
                    textIcon4='Surroundings'
                />
            </div>
            <div className="paragraph-list-card__card-container">
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
                    title='Prashasti hasn’t responded to your Email from 22 Jan, 2020'
                />
            </div>

        </div>
    )

}