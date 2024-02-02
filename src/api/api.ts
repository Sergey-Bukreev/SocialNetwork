import axios, {AxiosInstance} from "axios";

const instance:AxiosInstance = axios.create({
     baseURL:"https://social-network.samuraijs.com/api/1.0/",
     withCredentials:true,
     headers: {
          "API-KEY": "115b29b2-aaf9-4fe4-b58b-b4e6116bf632"
     }
})
export const UsersAPI = {
     getUsers (currentPage:number, pageSize:number)  {
          return instance.get( `users?page=${currentPage}&count=${pageSize}`, ).then(response => response.data)
     },
     unfollowUser(userId:number){
          return instance.delete(`follow/${userId}`).then(response => response.data)
     },
     followUser (userId:number){
          return instance.post(`follow/${userId}`).then(response => response.data)
     },
     getProfile (userId:number) {
          return  instance.get(`profile/`+userId)
     }
}
export const AuthAPI = {
     me() {
          return instance.get(`auth/me`)
     }
}