import { MicroImageText } from '../../atoms/MicroImageText/MicroImageText'
import './style.scss'

export const MicroContainer = () => {

    return (
        <div className='micro-container'>
            <div className='micro-container__container-opacity'>
                <div className='micro-container__text-fixed'>
                    <MicroImageText
                        name='Archana'
                        start='12 Dec, 2019'
                        end='27 Jan, 2020' />
                </div>
            </div>
            <MicroImageText
                source='/images/pictures/User4.jpg'
                name='Archana'
                start='12 Dec, 2019'
                end='27 Jan, 2020' />
            <MicroImageText
                source='/images/pictures/User4.jpg'
                name='Archana'
                start='12 Dec, 2019'
                end='27 Jan, 2020' />
            <MicroImageText
                source='/images/pictures/User4.jpg'
                name='Archana'
                start='12 Dec, 2019'
                end='27 Jan, 2020' />
            <MicroImageText
                source='/images/pictures/User4.jpg'
                name='Archana'
                start='12 Dec, 2019'
                end='27 Jan, 2020' />
        </div>
    )

}