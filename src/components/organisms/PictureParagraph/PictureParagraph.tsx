import { Text } from "../../atoms/Text/Text"
import './style.scss'

type PictureParagraphProps = {
    title: string
    author: string
    paragraph: string
}

export const PictureParagraph = ({ title, author, paragraph }: PictureParagraphProps) => {

    return (
        <>
            <div className="picture-paragraph">
                <div className='picture-paragraph__title'>
                    <Text tag='h2'>{title}</Text>
                </div>
                <div className='picture-paragraph__body'>
                    <img className='picture-paragraph__main-picture' />
                    <div className='picture-paragraph__title-secondary'>
                        <Text tag='h5' modifier='heading5-bold'>{author}</Text>
                    </div>
                    <div className='picture-paragraph__icons-container'>
                        <img className='picture-paragraph__icon' src='/images/icons/QuotationMarks.svg' />
                        <img className='picture-paragraph__icon' src='/images/icons/QuotationMarks.svg' />
                    </div>
                    <div className='picture-paragraph__paragraph'>
                        <Text tag='p' modifier='paragraph-large'>
                            {paragraph}
                        </Text>
                    </div>
                    <img className='picture-paragraph__secondary-image' src='/images/pictures/Signature.png' />
                </div>
            </div>
            <div className='scroll-container'>
                <img className='scroll-container__scroll' src='/images/icons/Scroll.svg' />
            </div>
        </>
    )

}