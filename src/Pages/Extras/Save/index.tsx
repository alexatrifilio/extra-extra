import { FC } from "react";
import { Layout } from "../../../Components";
import { SaveExtraForm } from "./Form";

const Save:FC = () => {


    return(
        <Layout page="save-extra">
            <h2> Agregar Extra </h2>
            <div className="card card-large">              
                <SaveExtraForm />
            </div>
        </Layout>
    )
}

export { Save as SaveExtra } 