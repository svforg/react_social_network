import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'bf53208e-1e77-48d9-b8ca-07cb98ee61af'
    }
});

export const getUsersAPI = (pageSize: any, currentPage: number) => instance
    .get(`users?count=${pageSize}&page=${currentPage}`)
    .then(response => response.data);

export const followUserAPI = (userId: string) => instance
    .post(`follow/${userId}`)
    .then(response => response.data);

export const unFollowUserAPI = (userId: string) => instance
    .delete(`follow/${userId}`)
    .then(response => response.data);


export const signInAPI = () => instance
    .get(`auth/me`)
    .then(response => response.data);
