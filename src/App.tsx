import './App.css'
import { Footer } from './components/organisms/Footer/Footer'
import { IconBarImage } from './components/organisms/IconBarImage/IconBarImage'
import { Navbar } from './components/organisms/Navbar/Navbar'
import { ParagraphListCard } from './components/organisms/ParagraphListCard/ParagraphListCard'
import { PictureParagraph } from './components/organisms/PictureParagraph/PictureParagraph'

function App() {

  return (
    <>
      <Navbar />
      <IconBarImage />
      <ParagraphListCard
        source='/images/icons/GreenBell.svg'
        title='Get reminders to follow up'
        text='We remind you of everything important and track everything that’s important to your important ones so you always 
              stay connected. We only tell you the details when you need them the most.'
        textIcon={['Birthdays', 'Business Meetings', 'Friends & Family', 'Surroundings']}
      />
      <ParagraphListCard
        source='/images/icons/GreenArrows.svg'
        title='Our sync remembers everything'
        text='We build a huge databasse of all your contacts with all the possible details they share with you and you can 
        access it anywhere, anytime. It’s works so well that you will love it like we do.'
        textIcon={['Available on devices', 'Can be accesed via phonebook', 'Seatch details', '24X7 Support']}
        cardType='card'
      />
      <ParagraphListCard
        source='/images/icons/LinkGreen.svg'
        title='Stay connected in a few clicks'
        text='The multichannel sales engagement platform which automates personal email outreach, calls, and tasks,
           while Sales can focus on what really matters - closing'
        textIcon={['The multichannel', 'The multichannel', 'The multichannel', 'The multichannel']}
        cardType='card-large'
        alignLeft={true}
      />
      <PictureParagraph
        title='What our customers are saying'
        author='Michelle Johnson, Australia'
        paragraph='The multichannel sales engagement platform which automates personal email outreach, calls, and tasks, 
        while Sales can focus on what really matters - closing while Sales can focus on what really matters - closing'
        />
      <Footer/>
      {/*       <Card
        title='Send content around anxiety'
        text='3 people on the list'
        paragraph="We all worry and get upset from time to time. It’s a normal part of life, right? But what happens when that anxiety or anger takes over, and you can’t calm down?"
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
      /> */}
    </>
  )
}

export default App
