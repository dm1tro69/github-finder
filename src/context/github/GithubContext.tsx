import {createContext, ReactNode, useState} from "react";
import {UsersType} from "../../types";

const GithubContext = createContext(null)

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

type ProviderType = {
    children: ReactNode
}



export const GithubProvider = ({children}: ProviderType) => {
    const [users, setUsers] = useState<UsersType[]>([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`, {
            method: 'GET',
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }

        })
        const data = await response.json() as UsersType[]
        setUsers(data)
        setLoading(false)
    }
    // @ts-ignore
    return <GithubContext.Provider value={{users, loading, fetchUsers}}>
             {children}
           </GithubContext.Provider>

}
export default GithubContext