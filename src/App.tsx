import './App.css'
import { Card } from './components/molecules/Card/Card'
import { IconBarImage } from './components/organisms/IconBarImage/IconBarImage'
import { Navbar } from './components/organisms/Navbar/Navbar'
import { ParagraphListCard } from './components/organisms/ParagraphListCard/ParagraphListCard'

function App() {

  return (
    <>
      <Navbar />
      <IconBarImage />
      <ParagraphListCard/>
      <Card 
        title='Send content around anxiety' 
        text='3 people on the list'
        source= {[{ 
          picture: '/images/pictures/User1.jpg',
          titleImage: 'Ciao'
        }, 
        {
          picture: '/images/pictures/User2.jpg',
          titleImage: 'Ciao2'
        },
        {
          picture: '/images/pictures/User3.jpg',
          titleImage: 'Ciao3'
        }  
      ]}
        />
    </>
  )
}

export default App
