const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const setUsersPage = 'setPage';
const setTotalUsersCount = 'setTotalUserCount';
const TOGGLE_IS_FETCHNING = 'TOGGLE_IS_FETCHNING ';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
            return { ...state, isFetching: action.isFetching }
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