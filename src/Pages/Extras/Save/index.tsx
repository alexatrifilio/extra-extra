import { FC } from "react";
import { Layout } from "../../../Components";

const Save:FC = () => {
    return(
        <Layout>
            <form action="submit">
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
            </form>
        </Layout>
    )
}

export { Save as SaveExtra } 