import './style.scss'
import { IconText } from "../../atoms/IconText/IconText"
import { TextParagraph } from "../../atoms/TextParagraph/TextParagraph"

type TextListWrapperProps = {
    source: string
    title: string
    text: string
    textIcon1: string
    textIcon2: string
    textIcon3: string
    textIcon4: string
}

export const TextListWrapper = ({ source, title, text, textIcon1, textIcon2, textIcon3, textIcon4 }: TextListWrapperProps) => {

    return (

        <div className="text-list-wrapper">
            <img className='text-list-wrapper__icon' src={source} />
            <TextParagraph title={title} text={text} />
            <ul className='text-list-wrapper__list'>
                <li className='text-list-wrapper__list-item'>
                    <IconText text={textIcon1} iconLight={true} large={true} />
                </li>
                <li className='text-list-wrapper__list-item'>
                    <IconText text={textIcon2} iconLight={true} large={true} />
                </li>
                <li className='text-list-wrapper__list-item'>
                    <IconText text={textIcon3} iconLight={true} large={true} />
                </li>
                <li className='text-list-wrapper__list-item'>
                    <IconText text={textIcon4} iconLight={true} large={true} />
                </li>
            </ul>
        </div>

    )

}