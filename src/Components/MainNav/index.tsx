import { FC } from "react"
import { Link } from "react-router-dom"

const MainNav:FC = () => {
    return(
        <nav>
            <Link to={'/extras/save'}> Agregar Extra </Link>
            <Link to={'/projects'}> Mis Proyectos </Link>
            <Link to={'/projects/save'}> Crear Proyecto </Link>
        </nav>
    )
}

export { MainNav }