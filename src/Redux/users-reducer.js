import { getUsers, unFollowUser, FollowUser } from '../API/API';
import { objReplace } from '../Utilits/Helper'

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
                users: objReplace(state.users, 'id', action.userId, { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: objReplace(state.users, 'id', action.userId, { followed: false })
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
    return async (dispatch) => {
        dispatch(isFetchingAC(true));
        let response = await getUsers(currentPage, pageSize)
        dispatch(isFetchingAC(false));
        dispatch(setUsersAC(response.data.items));
        dispatch(setTotalUserCountAC(response.data.totalCount));
    }
}
export const setPageThunkCreator = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(setPageAC(pageNumber));
        dispatch(isFetchingAC(true))
        let response = await getUsers(pageNumber, pageSize)
        dispatch(response)
        dispatch(isFetchingAC(false));
        dispatch(setUsersAC(response.data.items));
    }
}

const ClickFollowUnfollow = async (userId, dispatch, APIMethod, actionCreator) => {
    dispatch(buttonIsClickededAC(true));
    let data = await APIMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }

    dispatch(buttonIsClickededAC(false));

}


export const ClickFollowThunkCreator = (userId) => {
    return async (dispatch) => {
        ClickFollowUnfollow(userId, dispatch, unFollowUser, unfollowAC)
    }
}
export const ClickUnFollowThunkCreator = (userId) => {
    return async (dispatch) => {
        ClickFollowUnfollow(userId, dispatch, FollowUser, followAC)
    }
}
