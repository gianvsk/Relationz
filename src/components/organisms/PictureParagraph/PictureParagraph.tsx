import { Text } from "../../atoms/Text/Text"
import './style.scss'

type PictureParagraphProps = {
    title: string
    author: string
    paragraph: string
    ios: boolean
}

export const PictureParagraph = ({ title, author, paragraph, ios }: PictureParagraphProps) => {

    return (
        <section className="picture-paragraph">

            <div className="visible-xs">
                <img className='picture-paragraph__user picture-paragraph__user--image1' src='/images/pictures/UserParagraph1.jpg' />
                <img className='picture-paragraph__user picture-paragraph__user--image2' src='/images/pictures/UserParagraph2.jpg' />
                <img className='picture-paragraph__ring picture-paragraph__ring--medium'  src='/images/icons/RingYellowSmallXs.svg'/>
                <img className='picture-paragraph__user picture-paragraph__user--image3' src='/images/pictures/UserParagraph3.jpg' />
                <img className='picture-paragraph__user picture-paragraph__user--image4' src='/images/pictures/UserParagraph4.jpg' />
                <img className='picture-paragraph__user picture-paragraph__user--image5' src='/images/pictures/UserParagraph5.jpg' />
                <img className='picture-paragraph__ring picture-paragraph__ring--small'  src='/images/icons/RingBlueSmallXs.svg'/>
                <img className='picture-paragraph__user picture-paragraph__user--image6' src='/images/pictures/UserParagraph6.jpg' />
            </div>

            <div className="visible-xl">
                <img className='picture-paragraph__user picture-paragraph__user--image1' src='/images/pictures/UserParagraph1.jpg' />
                <img className='picture-paragraph__user picture-paragraph__user--image2' src='/images/pictures/UserParagraph2.jpg' />
                <img className='picture-paragraph__ring picture-paragraph__ring--medium'  src='/images/icons/RingDesktop4.svg'/>
                <img className='picture-paragraph__user picture-paragraph__user--image3' src='/images/pictures/UserParagraph3.jpg' />
                <img className='picture-paragraph__user picture-paragraph__user--image4' src='/images/pictures/UserParagraph4.jpg' />
                <img className='picture-paragraph__user picture-paragraph__user--image5' src='/images/pictures/UserParagraph5.jpg' />
                <img className='picture-paragraph__ring picture-paragraph__ring--small'  src='/images/icons/RingBlueMediumXl.svg'/>
                <img className='picture-paragraph__user picture-paragraph__user--image6' src='/images/pictures/UserParagraph6.jpg' />
            </div>

            <div className='picture-paragraph__title'>
                <Text tag='h2'>{title}</Text>
            </div>

            <div className='picture-paragraph__body'>
                <img className='picture-paragraph__main-picture' />
                <div className='picture-paragraph__title-secondary'>
                    <Text tag='h5' modifier='heading5-bold'>{author}</Text>
                </div>

                <div className='picture-paragraph__icons-container visible-xs-flex'>
                    <img className='picture-paragraph__icon' src='/images/icons/QuotationMarks.svg' />
                    <img className='picture-paragraph__icon' src='/images/icons/QuotationMarks.svg' />
                </div>

                {ios ? (
                    <div className='picture-paragraph__icons-container visible-xl-flex'>
                        <img className='picture-paragraph__icon' src='/images/icons/QuotationMarks.svg' />
                        <img className='picture-paragraph__icon' src='/images/icons/QuotationMarks.svg' />
                    </div>)
                    :
                    <div className='picture-paragraph__icons-container visible-xl-flex'>
                        <img className='picture-paragraph__icon' src='/images/icons/QuotationMarksBlue.svg' />
                        <img className='picture-paragraph__icon' src='/images/icons/QuotationMarksBlue.svg' />
                    </div>
                }

                <div className='picture-paragraph__paragraph'>
                    <Text tag='p' modifier='paragraph-large'>
                        {paragraph}
                    </Text>
                </div>

                <img className='picture-paragraph__secondary-image' src='/images/pictures/Signature.png' />
                <img className='picture-paragraph__dots' src='/images/icons/Dots.svg' />
            </div>

            <div className='scroll-container visible-xs-flex'>
                <img className='scroll-container__scroll' src='/images/icons/Scroll.svg' />
            </div>

            <div className='scroll-container visible-xl-flex'>

                {!ios ?
                    <img className='scroll-container__scroll' src='/images/icons/ScrollBlue.svg' />
                    :
                    <img className='scroll-container__scroll' src='/images/icons/Scroll.svg' />
                }

            </div>
        </section>
    )

}