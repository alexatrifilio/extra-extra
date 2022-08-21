import { FC } from "react";
import { MainNav } from "../MainNav";
import './style.scss'

type Props = {
    hideNav?: boolean
}

const Header:FC<Props> = ({hideNav}) => {
    return(
        <header>
            <div className="container">
            <h1 className="main-title">extra-extra</h1>
            {!hideNav && <MainNav />}
            </div>
        </header>
    )
}

export { Header }