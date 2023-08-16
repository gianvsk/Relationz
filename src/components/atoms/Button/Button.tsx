import clsx from 'clsx'
import './style.scss'

type ButtonProps = {
    text: string
    size: 'button-sm' | 'button-md' | 'button-lg' | 'button-lg-empty-blue' | 'button-lg-empty-green'
    ios?: boolean
}

export const Button = ({ text, size, ios }: ButtonProps) => {

    return (
        <div className={clsx('button',
            {
                'button--green': ios,
                'button--blue': !ios,
                'button--small': size === 'button-sm',
                'button--default': size === 'button-md',
                'button--large': size === 'button-lg',
                'button--default button--large-empty-blue': size === 'button-lg-empty-blue',
                'button--default button--large-empty-green': size === 'button-lg-empty-green'
            })}>
            {text}
        </div>
    )

}