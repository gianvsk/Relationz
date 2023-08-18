import clsx from "clsx"
import { Text } from "../Text/Text"
import './style.scss'

type MicroImageTextProps = {
    source?: string
    name: string
    start: string
    end: string
}

export const MicroImageText = ({source, name, start, end}: MicroImageTextProps) => {

    return (
        <div className={clsx('micro-image-text', {'micro-image-text__picture-container--small': !source})}>
            <div className="micro-image-text__picture-container">
                {source  && <img className='micro-image-text__picture' src={source} />}
                <Text tag='span' modifier={ source ? 'span-micro' : 'span-micro-base'}>{name}</Text>
            </div>
            <Text tag='span' modifier={ source ? 'span-micro' : 'span-micro-base'}>{start}</Text>
            <Text tag='span' modifier={ source ? 'span-micro' : 'span-micro-base'}>{end}</Text>
        </div>
    )

}