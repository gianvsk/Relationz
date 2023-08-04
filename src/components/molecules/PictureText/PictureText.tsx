import clsx from "clsx"
import { Text } from "../../atoms/Text/Text"
import './style.scss'

type PictureText = {
    source?: string
    title: string
    text?: string
    spacingOff?: boolean
}

export const PictureText = ({ source, title, text, spacingOff }: PictureText) => {

    return (
        <div className={clsx('picture-text', { 'picture-text--spacing-off': spacingOff })}>
            {source && <img className='picture-text__image' src={source} />}
            <div className={clsx('picture-text__text', {'picture-text__text--spacing-off' : spacingOff})}>
                <Text tag='h4' modifier={text ? 'heading4-large' : ''}>{title}</Text>
                {text && <Text tag='span' modifier='span-icon'>{text}</Text>}
            </div>
        </div>
    )

}