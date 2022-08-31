import { FC, useState } from "react";
import { usersApi } from "../../../api/users";
import { UserPayload } from "../../../types";

const Form: FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass ] = useState('')

    const handleSubmit = (e: {preventDefault: () => void}) => {
        e.preventDefault()

        const user: UserPayload = { name, email, pass }
        
        usersApi.post(user)
    }

    return(
        <form action="submit" onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="name-user"> Nombre de usuario </label>
                <input 
                    type="text" 
                    name="nameuser" 
                    id="name-user"
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="email"> Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password"> Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={e => setPass(e.target.value)}
                />
            </div>
            <button type="submit"> Sign Up </button>
        </form>
    )
}


export { Form as SignUpForm }