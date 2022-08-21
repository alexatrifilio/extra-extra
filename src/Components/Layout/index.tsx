import { FC, ReactNode } from "react"
import { Header } from "../Header"
import './style.scss'



type Props = {
    children: ReactNode
    page: string
    hideNav?: boolean
}

const Layout: FC<Props> = ({children, page, hideNav}) => {
    return(
        <div className="layout">
            <Header hideNav={hideNav}/>
            <main className={`page ${page}`}>
                {children}
            </main>
            <footer> footer </footer>
        </div>
        
        
    )
}

export { Layout } 