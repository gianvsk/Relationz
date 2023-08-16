import clsx from "clsx"
import { Button } from "../Button/Button"
import { Text } from "../Text/Text"
import './style.scss'

type TextParagraphProps = {
    title: string
    text: string
    button?: boolean
    isIos?: boolean
}

export const TextParagraph = ({ title, text, button, isIos}: TextParagraphProps) => {

    return (
        <div className={clsx("text-paragraph", { 'text-paragraph--card': button })}>
            <div className={clsx('text-paragraph__texts', { 'text-paragraph__texts--gap-small': button })} >
                <Text tag='h2' modifier={button === true ? 'heading2-small' : ''}>{title}</Text>
                <Text tag={button === true ? 'h4' : 'p'}>{text}</Text>
            </div>
            {button && <Button text='Try it for free' size='button-lg' ios={isIos}/>}
        </div>
    )

}