import { FC } from "react";
import { MainNav } from "../MainNav";

const Header:FC = () => {
    return(
        <header>
            <h1 className="main-title">extra-extra</h1>
            <MainNav />
        </header>
    )
}

export { Header }