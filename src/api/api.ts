import axios, {AxiosInstance} from "axios";
import {UserPhotosType} from "../redux/profile-reducer/profileReducer";

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
     }

}
export const AuthAPI = {
     me() {
          return instance.get(`auth/me`)
     },
     login(email:any, password:any, rememberMe:boolean = false) {
          return instance.post(`auth/login`, {email, password, rememberMe})
     },
     logout() {
          return instance.delete(`auth/login`)
     }
}
export const ProfileAPI = {
     getProfile (userId:number) {
          return  instance.get(`profile/`+userId)
     },
     getStatus (userId:number) {
          return instance.get(`profile/status/`+userId)
     },
     updateStatus (statusText:string) {
          return instance.put(`profile/status`, {status:statusText})
     },
     savePhoto (file:File) {
          const formData = new FormData()
          formData.append("image", file)
          return instance.put(`profile/photo`, formData, {
               headers:{
                    "Content-Type": "multipart/form-data"
               }
          })
     }
}