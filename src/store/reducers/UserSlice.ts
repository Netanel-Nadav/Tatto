import { asyncStorage } from "../../services/asyncStorage"


interface GoogleUser {
    aud: string,
    azp: string,
    email: string,
    email_verified: boolean,
    exp: number,
    family_name: string,
    given_name: string,
    iat: number,
    iss: string,
    jti: string,
    name: string,
    nbf: number,
    picture: string,
    sub: string
}


enum UserActionTyps {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    LOGIN_WITH_GOOGLE = 'LOGIN_WITH_GOOGLE'
}


interface ActionType {
    type: UserActionTyps,
    payload: any
}


export interface UserState {
    user: GoogleUser | null
}


const initialState: UserState = {
    user: asyncStorage.loadFromStorage('logged-user') || null
}


const userReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case UserActionTyps.LOGIN_WITH_GOOGLE:
            return { ...state, user: action.payload }
        case UserActionTyps.LOGOUT:
            return { ...state, user: action.payload }
        default:
            return state
    }
}





export { userReducer, UserActionTyps }
