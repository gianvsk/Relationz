import { TitleSearchbar } from "../TitleSearchbar/TitleSearchbar"
import { MultiIcon } from "../../molecules/ImageMultiIcon/ImageMultiIcon"
import './style.scss'
import clsx from "clsx"
import { useDevice } from "../../../contexts/DeviceContext"

export const IconBarImage = () => {

    const {ios} = useDevice()

    return (
        <div className={clsx("icon-bar-image",{'icon-bar-image--no-ios' : !ios})}>
            <div className={clsx('icon-bar-image__title-wrapper', {'icon-bar-image__title-wrapper--no-ios': !ios})}>
                <TitleSearchbar ios={ios}/>
            </div>
            {ios === true && 
                <div className='icon-bar-image__images'>
                    <img className='icon-bar-image__image' src='/images/pictures/Phone.png' />
                    <img className='icon-bar-image__ring' src='/images/icons/Ring1.1.svg'/>
                    </div>
                    }
            <div className='icon-bar-image__multi-icons'>
                <MultiIcon/>
            </div>
        </div>
    )

}