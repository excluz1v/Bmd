import {authUser} from '../API/API'
export let Set_Initialize = () => {
    return { type: "set_Initialize", }
}


let initialState = {
    initialize: false
}


export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'set_Initialize': {
            return {
                ...state,
                initialize: true
            }
        }
        default: return state;
    }
}

export let authUserData = () => (dispatch) => {
    let promise = authUser().then(response => {
        if (response.resultCode === 0) {
            this.props.SET_USER_DATA_AC(response.data.data, true)
        }
    });
    promise.then(() => { dispatch(Set_Initialize()) })
}