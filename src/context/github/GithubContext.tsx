import {createContext, ReactNode, useReducer} from "react";
import {initialStateType, UsersType} from "../../types";
import githubReducer from "./GithubReducer";

const GithubContext = createContext(null)

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

type ProviderType = {
    children: ReactNode
}



export const GithubProvider = ({children}: ProviderType) => {

    const initialState: initialStateType = {
        users: [],
        loading: true
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`, {
            method: 'GET',
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }

        })
        const data = await response.json() as UsersType[]

        dispatch({
            type: 'GET_USERS',
            payload: data
        })

    }
    // @ts-ignore
    return <GithubContext.Provider value={{users: state.users, loading: state.loading, fetchUsers}}>
             {children}
           </GithubContext.Provider>

}
export default GithubContext