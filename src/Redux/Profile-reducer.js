import { getProfileStatus, updateProfileStatus } from '../API/API'

export let AddPostCreateAction = () => {
    return { type: "AddPost" }
}
export let UpgradePostTextCreateAction = (text) => {
    return { type: "UpgradePostText", data: text }
}

export let setProfileAC = (profile) => {
    return { type: "setProfile", profile: profile }
}

export let setStatusAC = (status) => {
    return { type: 'setStatus', status }
}

let initialState = {
    WallPosts: [{}],
    NewPostText: "",
    profile: null,
    status: null
}
let i = 0;
export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddPost': {
            return {
                ...state,
                WallPosts: [...state.WallPosts, { id: i++, text: state.NewPostText }],
                NewPostText: ''
            }
        }
        case 'UpgradePostText':
            let stateCopy = { ...state };
            stateCopy.NewPostText = action.data;
            return stateCopy;
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

    return (dispatch) => {
        getProfileStatus(userId).then(response => {
            dispatch(setStatusAC(response.data))
        })
    }
}

export const updateStatusThunk = (text) => {

    return (dispatch) => {
        updateProfileStatus(text).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(text))
            }
        })
    }
}