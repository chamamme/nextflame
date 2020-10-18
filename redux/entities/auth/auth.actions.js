import { AUTH_LOGIN } from "../../action.types";

export const changeTheme = (user)=>{
    return {
            type: AUTH_LOGIN,
            payload:user
    }
}