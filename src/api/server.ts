import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '4519f0f1-a97a-49f3-afed-93ad76508a7a'
    }
});

export const instanceApi = {
    getUsersAPI(pageSize: any, currentPage: number) {
        return instance
            .get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    followUserAPI(userId: any) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollowUserAPI(userId: any){
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    },
    signInAPI(){
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },
};


