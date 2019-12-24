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
                ...action.data,
                isAuth:true
            }
        default: return state;
    }
}

export let SET_USER_DATA_AC = ({id, login, email}) => {
    return { type: setUserData, data: { id, login, email } }
}
