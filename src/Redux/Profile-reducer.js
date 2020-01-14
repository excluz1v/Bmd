import { getProfileStatus, updateProfileStatus, saveProfileApi,savePhotoApi } from '../API/API'
import { stopSubmit } from 'redux-form'

export let AddPostCreateAction = (text) => {
    return { type: "AddPost", text }
}


export let setProfileAC = (profile) => {
    return { type: "setProfile", profile: profile }
}

export let setStatusAC = (status) => {
    return { type: 'setStatus', status }
}

let savePhotoSucces = (photo) => {
    return { type: 'savePhoto', photo }
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
        case "savePhoto": {
            return { ...state, profile: { ...state.profile, photos: action.photo } }
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

export const saveProfile = (profile) => {
    return async (dispatch) => {
        let response = await saveProfileApi(profile)
        if (response.data.resultCode === 0) {
            dispatch(setProfileAC(profile))
        } else {
            dispatch(stopSubmit('ProfileInfo', { _error: response.data.messages[0] }))
            return Promise.reject(response.data.messages[0])
        }
    }
}

export const savePhoto = (file) => {

    return async (dispatch) => {
        let response = await savePhotoApi(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSucces(file))
        }
    }
}