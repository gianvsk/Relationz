import { TitleSearchbar } from "../TitleSearchbar/TitleSearchbar"
import { MultiIcon } from "../../molecules/ImageMultiIcon/ImageMultiIcon"
import './style.scss'
import clsx from "clsx"

type IconBarImageProps = {
    ios: boolean
}

export const IconBarImage = ({ ios }: IconBarImageProps) => {

    return (
        <section className={clsx("icon-bar-image", { 'icon-bar-image--no-ios': !ios })}>
            <div className={clsx('icon-bar-image__title-wrapper', { 'icon-bar-image__title-wrapper--no-ios': !ios })}>
                <TitleSearchbar ios={ios} 
                                title='Take your relationships to the next level' 
                                text='Consulenza per famiglie, pensionati e piccole imprese.'
                                paragraph='The multichannel sales engagement platform which automates personal email outreach, 
                                calls, and tasks, while Sales can focus on what really matters - closing deals.' />
            </div>
            
            <div className='icon-bar-image__images visible-xs'>
                <img className='icon-bar-image__image' src='/images/pictures/Phone.png' />
                <img className='icon-bar-image__ring icon-bar-image__ring--small' src='/images/icons/RingXs2.1.svg' />
                <img className='icon-bar-image__ring icon-bar-image__ring--xl' src='/images/icons/RingFullOrange74.svg' />
            </div>

            {ios ? (
                <div className='icon-bar-image__images visible-xl'>
                    <img className='icon-bar-image__image' src='/images/pictures/Phone.png' />
                    <img className='icon-bar-image__ring icon-bar-image__ring--large visible-xl' src='/images/icons/Ring1.1.svg' />
                </div> )
                :
                null
            }

            <div className='icon-bar-image__multi-icons'>
                <MultiIcon ios={ios}/>
            </div>
        </section>
    )

}