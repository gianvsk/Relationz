import clsx from "clsx"
import { useMemo } from "react"
import './style.scss'

type TextProps = {
    tag: 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
    modifier?: 'span-small' | 'span-large' | 'span-icon' | 'span-account' | 'span-text' | 'span-icon-small' |
                'logo'
    children: React.ReactNode
}

export const Text = ({tag, modifier, children} : TextProps) => {

    const Tag = tag

    const textClass = useMemo(() => {
        switch(tag) {
            case 'a':
                return 'link'
            case 'h1':
                return 'heading1'
            case 'h2':
                return 'heading2'
            case 'h3':
                return 'heading3'
            case 'h4':
                return 'heading4'
            case 'h5': 
                return 'heading5'
            case 'h6':
                return 'heading6'
            case 'p':
                return 'paragraph'
            case 'span':
                return 'span'
            default:
                return ''
        }
    }, [tag])

    const textModifier = useMemo(() => {
        switch(modifier) {
            case 'span-small':
                return 'span span--small'
            case 'span-large':
                return 'span span--large'
            case 'span-icon':
                return 'span span--icon'
            case 'span-icon-small':
                return 'span span--icon-small'
            case 'span-account':
                return 'span span--account'
            case 'span-text':
                return 'span span-text'
            case 'logo':
                return 'heading1 heading1--logo'
            default:
                return ''
        }
    }, [modifier])



    return (
        <Tag className={clsx(textClass, textModifier, 'margin-0')}>{children}</Tag>
    )

}