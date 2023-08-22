import { Button } from "../../atoms/Button/Button"
import { CheckText } from "../../atoms/CheckText/CheckText"
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
    ios:boolean
}

export const Card = ({ title, text, source, paragraph, ios }: CardProps) => {

    return (
        <div className="card">
            <div className='card__header'>
                <Text tag='h4' modifier='heading4-large'>{title}</Text>
                <Text tag='p' modifier='span-icon-small'>{source.length + ' ' + text}</Text>
            </div>
            <div className='card__spacer'></div>
            <div className='card__body'>
                <Text tag='span' modifier='span-extra-small'>Sending to:</Text>
                <div className='card__images-container'>
                    {source.map(el => (
                        <div className='card__user'>
                            <PictureText source={el.picture} cardType='card'>
                                <Text tag='h4'>{el.titleImage}</Text>
                            </PictureText>
                        </div>
                    ))}
                    <div className='card__paragraph'>
                        <Text tag='p' modifier='paragraph-small'>{paragraph}</Text>
                    </div>
                </div>
            </div>
            <div className='card__footer'>
                <CheckText color='checkbox' text='Send on Email as well' />
                <Button text='Send' size='button-sm' ios={ios}/>
            </div>
        </div>
    )

}