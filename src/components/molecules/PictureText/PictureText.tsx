import clsx from "clsx"
/* import { Text } from "../../atoms/Text/Text" */
import './style.scss'

type PictureText = {
    source: string
/*     title: string
    text?: string */
    children?: React.ReactNode
    spacingOff?: boolean
    cardType?: 'card' | 'card-large' | 'card-micro'
}

export const PictureText = ({ source, /* title, text, */ spacingOff, cardType, children }: PictureText) => {

    return (
        <div className={clsx('picture-text', {
            'picture-text--spacing-off no-box-shadow': spacingOff,
            'picture-text--no-padding': cardType === 'card' || cardType === 'card-large'
        })}>

            <div className={clsx('picture-text__container', {
                'picture-text__container--card-large': cardType === 'card-large'
            })}>

                {source &&
                    <img
                        className={clsx('picture-text__image', {
                            'picture-text__image--card': cardType === 'card',
                            'picture-text__image--card-large': cardType === 'card-large',
                            'picture-text__image--card-micro': cardType === 'card-micro'
                        })}
                        src={source}
                    />
                }

                <div className='picture-text__text'>
                    {children}
{/*                     {title || text &&
                        <>
                            <Text tag='h4' modifier={text ? 'heading4-large' : ''}>{title}</Text>
                            <Text tag='span' modifier='span-icon'>{text}</Text>
                        </>
                    } */}
                </div>
            </div>
        </div>
    )

}