import { Text } from "../Text/Text"
import './style.scss'

type ListProps = {
    title: string
    text: string[]
}

export const List = ({ title, text }: ListProps) => {

    return (
        <div className="list">
            <div className='list__title'>
                <Text tag='h4' modifier='heading4-extra-large'>{title}</Text>
            </div>
            <ul className='list__text'>
                {text.map(el => 
                <li>
                    <Text tag='a' modifier='link-small'>{el}</Text>
                </li>
                )}
            </ul>
        </div>
    )

}