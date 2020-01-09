import { getProfileStatus, updateProfileStatus } from '../API/API'

export let AddPostCreateAction = (text) => {
    return { type: "AddPost", text }
}


export let setProfileAC = (profile) => {
    return { type: "setProfile", profile: profile }
}

export let setStatusAC = (status) => {
    return { type: 'setStatus', status }
}

let initialState = {
    WallPosts: [{}],
    profile: null,
    status: null
}
let i = 0;
export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddPost': {
            return {
                ...state,
                WallPosts: [...state.WallPosts, { id: i++, text: action.text }],
            }
        }
        case "setProfile": {
            return { ...state, profile: action.profile }
        }
        case "setStatus": {
            return { ...state, status: action.status }
        }
        default: return state;
    }
}

export const getStatusThunk = (userId) => {
    return async (dispatch) => {
        let response = await getProfileStatus(userId);
        dispatch(setStatusAC(response.data))
    }
}

export const updateStatusThunk = (text) => {
    return async (dispatch) => {
        let response = await updateProfileStatus(text)
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(text))
        }
    }
}
export const AddPostThunk = (text) => {
    return (dispatch) => {
        dispatch(AddPostCreateAction(text))
    }
}