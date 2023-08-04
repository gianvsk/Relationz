import './style.scss'
import { Text } from '../../atoms/Text/Text'
import { Searchbar } from '../../atoms/Searchbar/Searchbar'
import { IconText } from '../../atoms/IconText/IconText'

export const TitleSearchbar = () => {

    return (
        <div className="title-searchbar">
            <div className='title-searchbar__titles-container'>
                <Text tag='h1'>Take your relationships to the next level</Text>
                <div className='title-searchbar__title title-searchbar__title--small'>
                    <Text tag='h5'>Consulenza per famiglie, pensionati e piccole imprese.</Text>
                </div>
                <div className='title-searchbar__title title-searchbar__title--large'>
                    <Text tag='h5'>The multichannel sales engagement platform which automates
                        personal email outreach, calls, and tasks, while Sales can focus on what really
                        matters - closing deals.</Text>
                </div>
            </div>
            <div className='title-searchbar__searchbar'>
                <Searchbar></Searchbar>
            </div>
            <div className='title-searchbar__list'>
                <IconText text='Synced contacts' large={true}/>
                <IconText text='Regular reminders' large={true}/>
                <IconText text='The multichannel' large={true}/>
            </div>
        </div>
    )


}