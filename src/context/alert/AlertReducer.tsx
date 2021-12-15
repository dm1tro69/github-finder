import {AlertType} from "../../types";
import {InitialType} from "./AlertContext";


const alertReducer = (state: InitialType, action: AlertType) => {
   switch (action.type) {
       case "SET_ALERT":
           return action.payload
       case "REMOVE_ALERT":
           return null
       default: return state
   }
}
export default alertReducer