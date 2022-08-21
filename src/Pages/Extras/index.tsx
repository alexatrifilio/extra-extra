import { FC, useEffect, useState } from "react";
import { extrasApi } from "../../api/extras";
import { Card, Layout } from "../../Components";
import { Extra } from "../../types";
import './style.scss'

const Extras:FC = () => {

    const [extras, setExtras] = useState<Extra[]>([])

    useEffect(() => {
        extrasApi.getAll().then(data => {setExtras(data)})
    }, [])



    return(
        <Layout page="extras">
            <div className="container">
                {
                    extras?.map(({name, lastName, age, img, id, project, evaluating, selected, notSelected}) => {
                        return(
                            <Card 
                                key={id} 
                                title={`${name} ${lastName}`} 
                                button={'Ver Detalle'}
                                size={'md'}
                            >
                                <div className="img-container">
                                    <img src={img} alt="" className="xtra-img"/>
                                </div>
                                <ul className="caracts">
                                    <li className="caract"> {age} </li>
                                    <li className="caract"> {project} </li>
                                </ul>
                                { evaluating && (
                                    <span className="tag evaluating"> En evaluación </span>
                                )}
                                { selected && (
                                    <span className="tag selected"> Seleccionadx </span>
                                )}
                                { notSelected && (
                                    <span className="tag not-selected"> No seleccionadx </span>
                                )}
                            </Card>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export { Extras }