import { IconText } from "../../atoms/IconText/IconText"
import { TextParagraph } from "../../atoms/TextParagraph/TextParagraph"

type TextLinkWrapperProps = {
    source: string
    title: string
    text: string
    textIcon1: string
    textIcon2: string
    textIcon3: string
    textIcon4: string
}

export const TextLinkWrapper = ({ source, title, text, textIcon1, textIcon2, textIcon3, textIcon4 }: TextLinkWrapperProps) => {

    return (

        <div className="text-link-wrapper">
            <img className='text-link-wrapper__icon' src={source} />
            <TextParagraph title={title} text={text} />
            <ul className='text-link-wrapper_list'>
                <li className='list-item'>
                    <IconText text={textIcon1} iconLight={true} large={true} />
                </li>
                <li className='list-item'>
                    <IconText text={textIcon2} iconLight={true} large={true} />
                </li>
                <li className='list-item'>
                    <IconText text={textIcon3} iconLight={true} large={true} />
                </li>
                <li className='list-item'>
                    <IconText text={textIcon4} iconLight={true} large={true} />
                </li>
            </ul>
        </div>

    )

}