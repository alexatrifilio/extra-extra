import { FC, ReactNode } from "react";
import { Btn } from "../Btn";
import './style.scss'

type Props = {
    title?: string,
    children: ReactNode
    button?: string
    buttonClick?: () => void
    size?: string
}

const Card:FC<Props> = ({title, children, button, buttonClick, size}) => {
    return(
        <div className={`card ${size}`}>
            {title && (
                <div className='card-header'>
                <h2> {title} </h2> 
                </div>
            )}
            <div className='card-body'>
                {children}
            </div>
            {button && buttonClick && (
                <div className='card-footer'>
                    <Btn text={button} className={'btn'} onClick={buttonClick} />
                </div>
            )}
        </div>
    )
}

export { Card }