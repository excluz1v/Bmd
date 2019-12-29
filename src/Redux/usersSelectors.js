export const authSelector = (state) => {
    return state.auth.isAuth
}
export const usersSelector = (state) => {
    return state.usersPage.users
}
export const upageSizeSelector = (state) => {
    return state.usersPage.pageSize
}
export const totalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}
export const currentPageSelector = (state) => {
    return state.usersPage.currentPage
}
export const isFetchingSelector = (state) => {
    return state.usersPage.isFetching
}
export const buttonIsClickedSelector = (state) => {
    return state.usersPage.isFetching
}