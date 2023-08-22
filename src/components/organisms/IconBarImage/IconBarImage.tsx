import { TitleSearchbar } from "../TitleSearchbar/TitleSearchbar"
import './style.scss'
import clsx from "clsx"

type IconBarImageProps = {
    ios: boolean
}

export const IconBarImage = ({ ios }: IconBarImageProps) => {

    return (
        <section className={clsx("icon-bar-image", {'icon-bar-image--desktop': !ios })}>
            <div className={clsx('icon-bar-image__title-wrapper', { 'icon-bar-image__title-wrapper--no-ios': !ios })}>
                <TitleSearchbar ios={ios}
                    title='Take your relationships to the next level'
                    text='Consulenza per famiglie, pensionati e piccole imprese.'
                    paragraph='The multichannel sales engagement platform which automates personal email outreach, 
                                calls, and tasks, while Sales can focus on what really matters - closing deals.' />
            </div>

            <div className='icon-bar-image__images visible-xs'>
                <img className='icon-bar-image__image' src='/images/pictures/Phone.png' />
            </div>

            <div className='visible-xs'>
                <img className='icon-bar-image__ring icon-bar-image__ring--small-1' src='/images/icons/RingXs2.1.svg' />
                <img className='icon-bar-image__ring icon-bar-image__ring--small-2' src='/images/icons/RingXs2.1.svg' />
                <img className='icon-bar-image__ring icon-bar-image__ring--small-3' src='/images/icons/RingOrangeLargeXs.svg' />
            </div>
            <div className='visible-xl'>
                <img className='icon-bar-image__ring icon-bar-image__ring--xl' src='/images/icons/RingOrangeLarge.svg' />
                {ios && <img className='icon-bar-image__ring icon-bar-image__ring--large-1' src='/images/icons/Ring1.1.svg' />}
                <img className={clsx('icon-bar-image__ring icon-bar-image__ring--large-2', {'icon-bar-image__ring--large-2-desktop': !ios})} src={ ios ? '/images/icons/Ring1.1.svg' : '/images/icons/RingYellowNavbarXl.svg'} />
            </div>

            {ios ? (
                <div className='icon-bar-image__images visible-xl'>
                    <img className='icon-bar-image__image' src='/images/pictures/Phone.png' />
                </div>)
                :
                null
            }
        </section>
    )

}