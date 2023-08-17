import { IconBarImage } from "../../components/organisms/IconBarImage/IconBarImage"
import { ParagraphListCard } from "../../components/organisms/ParagraphListCard/ParagraphListCard"
import { PictureParagraph } from "../../components/organisms/PictureParagraph/PictureParagraph"
import './style.scss'

type HomepageDesktop = {
    ios: boolean
}

export const HomepageDesktop = ({ios}: HomepageDesktop) => {

    return (
        <div className="homepage-desktop">
            <IconBarImage ios={ios}/>
            <ParagraphListCard
                source={['/images/icons/GreenBell.svg', '/images/icons/BlueBell.svg']}
                title='Get reminders to follow up'
                text='We remind you of everything important and track everything that’s important to your important ones so you always 
              stay connected. We only tell you the details when you need them the most.'
                textIcon={['Birthdays', 'Business Meetings', 'Friends & Family', 'Surroundings']}
                ios={ios}
            />
            <ParagraphListCard
                source={['/images/icons/GreenArrows.svg', '/images/icons/Arrows.svg']}
                title='Our sync remembers everything'
                text='We build a huge databasse of all your contacts with all the possible details they share with you and you can 
        access it anywhere, anytime. It’s works so well that you will love it like we do.'
                textIcon={['Available on devices', 'Can be accesed via phonebook', 'Seatch details', '24X7 Support']}
                cardType='card'
                ios={ios}
            />
            <ParagraphListCard
                source={['/images/icons/LinkGreen.svg', '/images/icons/Channel.svg']}
                title='Stay connected in a few clicks'
                text='The multichannel sales engagement platform which automates personal email outreach, calls, and tasks,
           while Sales can focus on what really matters - closing'
                textIcon={['The multichannel', 'The multichannel', 'The multichannel', 'The multichannel']}
                cardType='card-large'
                alignLeft={true}
                ios={ios}
            />
            <PictureParagraph
                title='What our customers are saying'
                author='Michelle Johnson, Australia'
                paragraph='The multichannel sales engagement platform which automates personal email outreach, calls, and tasks, 
        while Sales can focus on what really matters - closing while Sales can focus on what really matters - closing'
                ios={ios}
            />
        </div>

    )

}