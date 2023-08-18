import { PictureText } from "../../components/molecules/PictureText/PictureText"
import { IconBarImage } from "../../components/organisms/IconBarImage/IconBarImage"
import { ParagraphListCard } from "../../components/organisms/ParagraphListCard/ParagraphListCard"
import { PictureParagraph } from "../../components/organisms/PictureParagraph/PictureParagraph"
import { Text } from "../../components/atoms/Text/Text"
import './style.scss'
import { Card } from "../../components/molecules/Card/Card"
import { CardDetail } from "../../components/molecules/CardDetails/CardDetails"
import { MicroContainer } from "../../components/molecules/MicroContainer/MicroContainer"

type HomepageProps = {
    ios: boolean
}

export const Homepage = ({ ios }: HomepageProps) => {

    return (
        <div className="homepage">
            <IconBarImage ios={ios} />
            <ParagraphListCard
                source={['/images/icons/GreenBell.svg', '/images/icons/BlueBell.svg']}
                title='Get reminders to follow up'
                text='We remind you of everything important and track everything that’s important to your important ones so you always 
              stay connected. We only tell you the details when you need them the most.'
                textIcon={['Birthdays', 'Business Meetings', 'Friends & Family', 'Surroundings']}
                cardType='default'
                ios={ios}
            >
                <PictureText
                    source='/images/pictures/User1.jpg'>
                    <Text tag='span' modifier='span-h4like-text'>You have a meeting with
                        <Text tag='span' modifier='span-h4like-base'> Surbhi </Text>
                        to help her with her portfolio. She got a new pet (Dog named Tiger).</Text>
                </PictureText>
                <PictureText
                    source='/images/pictures/User2.jpg'>
                    <Text tag='span' modifier='span-h4like-base'>Ripal </Text>
                    <Text tag='span' modifier='span-h4like-text'>has recently been to Thailand and she wants to discuss about new Job opportunity.</Text>
                </PictureText>
                <PictureText
                    source='/images/pictures/User3.jpg'>
                    <Text tag='span' modifier='span-h4like-base'>Prashasti
                        <Text tag='span' modifier='span-h4like-text'> hasn’t responded to your Email from 22 Jan, 2020</Text>
                    </Text>
                    <Text tag='h4' modifier='heading4-bold'>Want to check up on her?
                        <Text tag='a' modifier='link-icon'> Follow up</Text>
                        <img className='small-arrow' src='/images/icons/SmallArrowGreen.svg' />
                    </Text>
                </PictureText>
            </ParagraphListCard>

            <ParagraphListCard
                source={['/images/icons/GreenArrows.svg', '/images/icons/Arrows.svg']}
                title='Our sync remembers everything'
                text='We build a huge databasse of all your contacts with all the possible details they share with you and you can 
        access it anywhere, anytime. It’s works so well that you will love it like we do.'
                textIcon={['Available on devices', 'Can be accesed via phonebook', 'Seatch details', '24X7 Support']}
                cardType='card'
                alignLeft={true}
                ios={ios} >

                <CardDetail
                    source='/images/pictures/User6.jpg'
                    details={{
                        name: 'Archana Deshmukh',
                        detail: 'Product Design Consultant',
                        birthday: '17 April, 1994',
                        job: 'Product Design Consultant',
                        event: 'Went to Amsterdam with parents to visit her brother.'
                    }} />
            </ParagraphListCard>

            <ParagraphListCard
                source={['/images/icons/LinkGreen.svg', '/images/icons/Channel.svg']}
                title='Stay connected in a few clicks'
                text='The multichannel sales engagement platform which automates personal email outreach, calls, and tasks,
           while Sales can focus on what really matters - closing'
                textIcon={['The multichannel', 'The multichannel', 'The multichannel', 'The multichannel']}
                cardType='card-large'
                ios={ios}>

                <Card
                    title='Send content around anxiety'
                    text='people on the list'
                    paragraph='We all worry and get upset from time to time. It’s a normal part of life, right? 
                                But what happens when that anxiety or anger takes over, and you can’t calm down?'
                    source={[{
                        picture: '/images/pictures/User4.jpg',
                        titleImage: 'Archana Kamath'
                    },
                    {
                        picture: '/images/pictures/User5.jpg',
                        titleImage: 'Surojit Saraswat'
                    },
                    {
                        picture: '/images/pictures/User1.jpg',
                        titleImage: 'Surbhi Gangwar'
                    }
                    ]}
                    ios={ios}
                />
            </ParagraphListCard>

            <PictureParagraph
                title='What our customers are saying'
                author='Michelle Johnson, Australia'
                paragraph='The multichannel sales engagement platform which automates personal email outreach, calls, and tasks, 
        while Sales can focus on what really matters - closing while Sales can focus on what really matters - closing'
                ios={ios}
            />
            <MicroContainer/>
        </div>

    )

}