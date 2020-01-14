import * as axios from 'axios';

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": "14b371df-1c1b-4dad-a0a6-9dfd1c5c05c6"
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
    return instance.post('/auth/login', { email, password, rememberMe })
}
export const authLogOutAPI = () => {
    return instance.delete('/auth/login')
}

export const saveProfileApi = (profile) => {
    return instance.put('/profile', profile)
}

export const savePhotoApi = (photoFile) => {

    let formData = new FormData()
    formData.append('image', photoFile)
    return instance.put('/profile/photo', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}