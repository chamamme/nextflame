import { APP_CHANGE_THEME } from "../../action.types";

export const changeTheme = (mode="dark")=>{
    return {
            type: APP_CHANGE_THEME,
            payload:mode
    }
}