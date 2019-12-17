export let AddPostCreateAction = () => {
    return { type: "AddPost" }
}
export let UpgradePostTextCreateAction = (text) => {
    return { type: "UpgradePostText", data: text }
}

let initialState = { WallPosts: [{}], NewPostText: "", }
let i = 0;
export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddPost': {
            let i = 0;
            return {
                ...state,
                WallPosts: [...state.WallPosts, { id: i++, text: state.NewPostText }],
                NewPostText: ''
            }

                ;
        }
        case 'UpgradePostText':
            let stateCopy = { ...state };
            stateCopy.NewPostText = action.data;
            return stateCopy;
        default: return state;
    }
}
