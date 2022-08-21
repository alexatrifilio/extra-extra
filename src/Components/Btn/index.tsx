
import { FC } from "react"

type Props = {
    text?: string,
    onClick: () => void,
    className: string

}

const Btn: FC<Props> = ({text, onClick, className}) => {
    return(
        <button onClick={onClick} className={className}>
            {text}
        </button>
    )
}

export { Btn }