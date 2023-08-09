import { Button } from "../../atoms/Button/Button"
import { IconText } from "../../atoms/IconText/IconText"
import { Text } from "../../atoms/Text/Text"
import { PictureText } from "../PictureText/PictureText"
import './style.scss'

type CardProps = {
    title: string
    text: string
    paragraph: string
    source: {
        picture: string,
        titleImage: string,
    }[]
}

export const Card = ({ title, text, source, paragraph }: CardProps) => {

    return (
        <div className="card">
            <div className='card__header'>
                <Text tag='h4' modifier='heading4-large'>{title}</Text>
                <Text tag='p' modifier='span-icon-small'>{text}</Text>
            </div>
            <div className='card__spacer'></div>
            <div className='card__body'>
                <Text tag='span' modifier='span-extra-small'>Sending to:</Text>
                <div className='card__images-container'>
                    {source.map(el => (
                        <div className='card__user'>
                            <PictureText source={el.picture} title={el.titleImage} spacingOff={true} cardType='card' />
                        </div>
                    ))}
                    <div className='card__paragraph'>
                        <Text tag='p' modifier='paragraph-small'>{paragraph}</Text>
                    </div>
                </div>
            </div>
            <div className='card__footer'>
                <IconText checkBox={true} text='Send on Email as well' />
                <Button text='Send' light={true} size='button-sm' />
            </div>
        </div>
    )

}