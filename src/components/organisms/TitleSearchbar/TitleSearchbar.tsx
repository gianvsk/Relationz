import './style.scss'
import { Text } from '../../atoms/Text/Text'
import { Searchbar } from '../../atoms/Searchbar/Searchbar'
import { IconText } from '../../atoms/IconText/IconText'
import clsx from 'clsx'

type TitleSearchbarProps = {
    ios: boolean;
}

export const TitleSearchbar = ({ios} : TitleSearchbarProps) => {

    return (
        <div className='title-searchbar'>
            {!ios &&
                <>
                    <img className='title-searchbar__ring title-searchbar__ring--ring1 visible-xl' src='/images/icons/RingDesktop1.svg' />
                    <img className='title-searchbar__ring title-searchbar__ring--ring2 visible-xl' src='/images/icons/RingDesktop2.svg' />
                </>
            }
            <div className='title-searchbar__titles-container'>
                <Text tag='h1'>Take your relationships to the next level</Text>
                <img className='title-searchbar__dots' src='/images/icons/Dots.svg' />
                <div className='title-searchbar__title title-searchbar__title--small'>
                    <Text tag='h5'>Consulenza per famiglie, pensionati e piccole imprese.</Text>
                </div>
                <div className={clsx('title-searchbar__title title-searchbar__title--large', { 'title-searchbar__title--no-ios': !ios })}>
                    <Text tag='h5'>The multichannel sales engagement platform which automates
                        personal email outreach, calls, and tasks, while Sales can focus on what really
                        matters - closing deals.</Text>
                </div>
            </div>
            <div className={clsx('title-searchbar__searchbar', { 'title-searchbar__searchbar--no-ios': !ios })}>
                <Searchbar ios={ios}></Searchbar>
            </div>
            <div className={clsx('title-searchbar__list', { 'title-searchbar__list--no-ios': !ios })}>
                <IconText text='Synced contacts' color='green'/>
                <IconText text='Regular reminders' color='green'/>
                <IconText text='The multichannel' color='green'/>
            </div>
        </div>
    )


}