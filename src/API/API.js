import * as axios from 'axios';

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": "fe8d657c-1bc0-4207-8409-21c0b5747998"
    }
})
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => { return response })
}
export const authUser = () => {
    return instance.get(`/auth/me`)/*.then(response => { return response.data })*/
}
export const FollowUser = (id) => {
    return instance.post(`/follow/${id}`).then(response => { return response.data })
}
export const unFollowUser = (id) => {
    return instance.delete(`/follow/${id}`).then(response => { return response.data })
}
export const getProfile = (uId) => {
    return instance.get('/profile/' + uId)
}

export const getProfileStatus = (id) => {
    return instance.get(`/profile/status/${id}`)
}
export const updateProfileStatus = (text) => {
    return instance.put('/profile/status', { status: text })
}
export const authLoginAPI = (email, password, rememberMe = false) => {
    return instance.post('/auth/login', { email, password,rememberMe })
}
export const authLogOutAPI = () => {
    return instance.delete('/auth/login').then(response =>{} )
}