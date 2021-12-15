import {ActionsType, initialStateType} from "../../types";


const githubReducer = (state: initialStateType, action: ActionsType) => {
   switch (action.type) {
       case 'GET_USERS':
           return {...state, users: action.payload, loading: false}
       default: return state
   }
}
export default githubReducer