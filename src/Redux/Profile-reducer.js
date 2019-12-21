export let AddPostCreateAction = () => {
    return { type: "AddPost" }
}
export let UpgradePostTextCreateAction = (text) => {
    return { type: "UpgradePostText", data: text }
}

export let setProfileAC = (profile) => {
    return { type: "setProfile", profile: profile }
}

let initialState = { WallPosts: [{}], NewPostText: "", profile: null }
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
        default: return state;
    }
}
