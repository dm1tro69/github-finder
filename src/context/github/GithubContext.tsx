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
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    const searchUsers = async (text: string) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            method: 'GET',
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }

        })
        const {items} = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items
        })

    }
    const getUser = async (text: string) => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${text}`, {
            method: 'GET',
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }

        })
        if (response.status === 404){
            // @ts-ignore
            window.location = '/notfound'
        }else {
            const data = await response.json()

            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }


    }
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }
    const handleClear = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    // @ts-ignore
    return <GithubContext.Provider value={{users: state.users, loading: state.loading, searchUsers, handleClear, user: state.user, getUser}}>
        {children}
    </GithubContext.Provider>

}
export default GithubContext