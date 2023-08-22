import { MultiIcon } from '../../molecules/ImageMultiIcon/ImageMultiIcon'
import './style.scss'

type HeroProps = {
    ios: boolean
}

export const Hero = ({ ios }: HeroProps) => {

    return (
        <div className='hero'>
            <div className="hero__head">
                <MultiIcon ios={ios} />
            </div>
            <div className='hero__body'>
                <div className='hero__image hero__image--ios visible-xs'/>
                {ios ?
                    <div className='hero__image hero__image--ios visible-xl' />
                    :
                    <div className='hero__image hero__image--desktop visible-xl' />
                }
                <img className='hero__dots' src='/images/icons/DotsLarge.svg' />
            </div>
        </div>
    )

}