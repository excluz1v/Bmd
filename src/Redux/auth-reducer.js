import { authLoginAPI, authUser, authLogOutAPI } from '../API/API'


const setUserData = 'Set_User_Data'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case setUserData:
            return {
                ...state,
                ...action.payload,
            }
        default: return state;
    }
}

export let SET_USER_DATA_AC = (id, login, email, isAuth) => {

    return { type: setUserData, payload: { id, login, email, isAuth } }
}
export let AuthLoginThunk = (email, password, rememberMe) => (dispatch) => {
 
    authLoginAPI(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            authUser()
                .then(res => {
                    return dispatch(SET_USER_DATA_AC(res.data.data.id, res.data.data.login, res.data.data.email, true))
                })
        }
    })
}

export let AuthLogOutThunk = () => (dispatch) => {
    // debugger
    authLogOutAPI().then(response => {
        if (response.data.resultCode === 0) {
            authUser().then(res => {
                return dispatch(SET_USER_DATA_AC(res.data.data.id, res.data.data.login, res.data.data.email, false))
            })
        }
    })
}