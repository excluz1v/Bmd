import { getUsers, unFollowUser, FollowUser } from '../API/API';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const setUsersPage = 'setPage';
const setTotalUsersCount = 'setTotalUserCount';
const TOGGLE_IS_FETCHNING = 'TOGGLE_IS_FETCHNING ';
const buttonIsClickeded = 'buttonIsClickeded'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    buttonIsClicked: false
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                }),
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case setUsersPage:
            return { ...state, currentPage: action.currentPage }
        case setTotalUsersCount:
            return { ...state, totalUsersCount: action.totalUsersCount };
        case TOGGLE_IS_FETCHNING:
            return { ...state, isFetching: action.isFetching };
        case buttonIsClickeded:
            return {
                ...state,
                buttonIsClicked: /*action.buttonIsClicked ?*/ action.buttonIsClick/*, action.userId /*: state.buttonIsClicked.filter(id => id !== action.userId)*/
            };
        default: return state;
    }
}
export let followAC = (userId) => {
    return { type: FOLLOW, userId }
}
export let unfollowAC = (userId) => {
    return { type: UNFOLLOW, userId }
}
export let setUsersAC = (users) => {
    return { type: SET_USERS, users }
}
export let setPageAC = (currentPage) => {
    return { type: setUsersPage, currentPage }
}
export let setTotalUserCountAC = (totalUsersCount) => {
    return { type: setTotalUsersCount, totalUsersCount }
}
export let isFetchingAC = (isload) => {
    return { type: TOGGLE_IS_FETCHNING, isFetching: isload }
}
export let buttonIsClickededAC = (buttonIsClick/*, userId*/) => {
    return { type: buttonIsClickeded, buttonIsClick/*, userId */ }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true));
        getUsers(currentPage, pageSize).then(response => {
            dispatch(isFetchingAC(false));
            dispatch(setUsersAC(response.data.items));
            dispatch(setTotalUserCountAC(response.data.totalCount));
        })
    }
}
export const setPageThunkCreator = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setPageAC(pageNumber));
        dispatch(isFetchingAC(true))
        dispatch(getUsers(pageNumber, pageSize)).then(response => {
            dispatch(isFetchingAC(false));
            dispatch(setUsersAC(response.data.items));
        })
    }
}

export const ClickFollowThunkCreator = (userId) => {
    return (dispatch) => {

        dispatch(buttonIsClickededAC(true/*,u.id*/));
        unFollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(buttonIsClickededAC(false/*,u.id*/));
        })
    }
}
export const ClickUnFollowThunkCreator = (userId) => {

    return (dispatch) => {
        dispatch(buttonIsClickededAC(true/*,u.id*/));
        FollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(buttonIsClickededAC(false/*,u.id*/));
        })
    }
}
