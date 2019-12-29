import { authLoginAPI, authUser, authLogOutAPI } from '../API/API'
import { stopSubmit } from 'redux-form'

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
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
            dispatch(stopSubmit('login', { _error: message }))
        }
    })
}

export let AuthLogOutThunk = () => (dispatch) => {
    authLogOutAPI().then(response => {
        if (response.data.resultCode === 0) {
            authUser().then(res => {
                return dispatch(SET_USER_DATA_AC(res.data.data.id, res.data.data.login, res.data.data.email, false))
            })
        } else {
        }
    })
}

