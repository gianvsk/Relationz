import { PictureText } from "../PictureText/PictureText"
import { Text } from "../../atoms/Text/Text"
import './style.scss'

type CardDetailProps = {
    source: string
    details: {
        name: string,
        detail: string,
        birthday: string,
        job: string,
        event: string
    }
}

export const CardDetail = ({ source, details }: CardDetailProps) => {

    const {name,detail,birthday,job,event} = details

    return (
        <div className="card-detail">
            <PictureText source={source} title={name} text={detail} cardType='card-large' />
            <div className='card-detail__text-spacer'>
                <div className='card-detail__span'>
                    <Text tag='span' modifier='span-extra-small'>More information</Text>
                </div>
                <div className='card-detail__body'>
                    <div className='card-detail__icon-text'>
                        <img src='/images/icons/Birthday.svg' />
                        <Text tag='h4'>{birthday}</Text>
                    </div>
                    <div className='card-detail__icon-text'>
                        <img src='/images/icons/Bag.svg' />
                        <Text tag='h4'>{job}</Text>
                    </div>
                    <div className='card-detail__icon-text'>
                        <img src='/images/icons/Verified.svg' />
                        <Text tag='h4'>{event}</Text>
                    </div>
                </div>
            </div>
        </div>
    )

}