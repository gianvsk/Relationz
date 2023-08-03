import clsx from 'clsx'
import './style.scss'

type ButtonProps = {
    text: string
    light?: boolean
    size: 'button-sm' | 'button-md' | 'button-lg'
}

export const Button = ({ text, light, size }: ButtonProps) => {

    return (
        <div className={clsx('button button--blue',
            {
                'button--green': light,
                'button--small': size === 'button-sm',
                'button--default': size === 'button-md',
                'button--large': size === 'button-lg'
            })}>
            {text}
        </div>
    )

}