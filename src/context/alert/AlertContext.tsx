import {createContext, ReactNode, useReducer} from "react";
import alertReducer from "./AlertReducer";

type AlertType = {
    children: ReactNode
}
export type InitialType = string | null

const AlertContext = createContext<InitialType>(null)


export const AlertProvider = ({children}: AlertType) => {

    const initialState: InitialType = null
    // @ts-ignore
    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (msg: string, type: AlertType) => {
        // @ts-ignore
       dispatch({
           type: 'SET_ALERT',
           payload: msg
       })
        // @ts-ignore
        setTimeout(() => {dispatch({type: 'REMOVE_ALERT'})}, 3000)
    }

    // @ts-ignore
    return <AlertContext.Provider value={{alert: state, setAlert}}>
            {children}
          </AlertContext.Provider>
}
export default AlertContext