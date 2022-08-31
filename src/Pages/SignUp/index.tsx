import { Layout } from "../../Components"
import { SignUpForm } from "./Form.tsx"

const SignUp = () => {
    return (
        <Layout page="sign-up" hideNav>
            <SignUpForm />
        </Layout>
    )
}

export { SignUp }