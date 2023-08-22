import { useLocation } from "react-router-dom"
import { List } from "../../atoms/List/List"
import { Text } from "../../atoms/Text/Text"
import { TextParagraph } from "../../atoms/TextParagraph/TextParagraph"
import './style.scss'

export const Footer = () => {

    const location = useLocation()

    const ios = location.pathname === '/' ? true : false

    return (
        <footer className="footer">
            <img className='footer__ring footer__ring--ring2 visible-xs' src='/images/icons/RingXs7.svg' />
            {ios ?
                <img className='footer__ring footer__ring--ring2 visible-xl' src='/images/icons/Ring6.svg' />
                :
                <img className='footer__ring footer__ring--ring2 visible-xl' src='/images/icons/RingFullOrange.svg' />
            }
            <TextParagraph
                title='Form better relationships with everyone'
                text='Start your free 14 days trial.'
                button={true}
                isIos={ios}
            />
            <div className="footer__body">
                <List title='Relationz' text={['Product Tour', 'Pricing', 'Founding Members', 'Case Studies']} />
                <List title='Company' text={['Blog', 'Career', 'Privacy', 'About']} />
                <List title='Support' text={['Documentation', 'Security', 'Mobility Guide', 'FAQs']} />
                <List title='Legal' text={['Terms of Service', 'Privacy Policy', 'Cookie Information', 'GDPR Commitment']} />
            </div>
            <div className='footer__ending'>
                <Text tag='h4' modifier='heading4-extra-large-bold'>Relationz</Text>
                <Text tag='p' modifier='paragraph-text'>Copyright © 2010 - 2019 Relationz Ltd. <br/> All rights reserved.</Text>
            </div>
            <img className='footer__ring footer__ring--ring1 visible-xs' src='/images/icons/RingXs6.svg' />
            <img className='footer__ring footer__ring--ring1 visible-xl' src='/images/icons/Ring5.svg' />
        </footer>
    )

}