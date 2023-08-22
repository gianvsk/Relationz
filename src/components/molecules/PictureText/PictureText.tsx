import clsx from "clsx"
import './style.scss'

type PictureText = {
    source: string
    children?: React.ReactNode
    cardType?: 'card' | 'card-large'
}

export const PictureText = ({ source, cardType, children }: PictureText) => {

    return (
        <div className={clsx('picture-text', {
            'picture-text--large': cardType
        })}>

            <div className={clsx('picture-text__container', {
                'picture-text__container--large': cardType,
            })}>

                <img
                    className={clsx('picture-text__image', {
                        'picture-text__image--card': cardType === 'card',
                        'picture-text__image--large': cardType === 'card-large',
                    })}
                    src={source}
                />
                <div className='picture-text__text'>
                    {children}
                </div >
            </div>
        </div >
    )
}