import { Text } from "../Text/Text"
import './style.scss'

type TextParagraphProps = {
    title: string
    text: string
}

export const TextParagraph = ({title,text}: TextParagraphProps) => {

    return (
        <div className="text-paragraph">
            <Text tag='h2'>{title}</Text>
            <Text tag='p'>{text}</Text>
        </div>
    )

}