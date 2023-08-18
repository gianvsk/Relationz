import './style.scss'
import { Text } from '../../atoms/Text/Text'
import { Searchbar } from '../../atoms/Searchbar/Searchbar'
import { CheckText } from '../../atoms/CheckText/CheckText'
import clsx from 'clsx'

type TitleSearchbarProps = {
    title: string,
    text: string,
    paragraph: string,
    ios: boolean
}

export const TitleSearchbar = ({ios, title, text, paragraph} : TitleSearchbarProps) => {

    return (
        <section className='title-searchbar'>
            {!ios &&
                <>
                    <img className='title-searchbar__ring title-searchbar__ring--ring1 visible-xl' src='/images/icons/RingDesktop1.svg' />
                    <img className='title-searchbar__ring title-searchbar__ring--ring2 visible-xl' src='/images/icons/RingDesktop2.svg' />
                </>
            }
            <div className='title-searchbar__titles-container'>
                <Text tag='h1'>{title}</Text>
                <img className='title-searchbar__dots' src='/images/icons/Dots.svg' />
                <div className='title-searchbar__title title-searchbar__title--small'>
                    <Text tag='h5'>{text}</Text>
                </div>
                <div className={clsx('title-searchbar__title title-searchbar__title--large', { 'title-searchbar__title--no-ios': !ios })}>
                    <Text tag='h5'>{paragraph}</Text>
                </div>
            </div>
            <div className={clsx('title-searchbar__searchbar', { 'title-searchbar__searchbar--no-ios': !ios })}>
                <Searchbar ios={ios}></Searchbar>
            </div>
            <div className={clsx('title-searchbar__list', { 'title-searchbar__list--no-ios': !ios })}>
                <CheckText text='Synced contacts' color='grey'/>
                <CheckText text='Regular reminders' color='grey'/>
                <CheckText text='The multichannel' color='grey'/>
            </div>
        </section>
    )


}