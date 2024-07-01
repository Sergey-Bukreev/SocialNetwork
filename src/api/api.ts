import axios, {AxiosInstance} from "axios";
import {UserPhotosType, UserProfileType} from "../redux/profile-reducer/profileReducer";
const tokenApi = localStorage.getItem('token');

const instance:AxiosInstance = axios.create({
     baseURL:"https://social-network.samuraijs.com/api/1.0/",
     withCredentials:true,
     headers: {
          "API-KEY": "0b0814e6-4fea-4499-b69a-f1627aad515f",
          'Authorization': tokenApi ? `Bearer ${tokenApi}` : ''
     }
})
export const setAuthToken = (token: string | null) => {
     if (token) {
          instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
     } else {
          delete instance.defaults.headers.common['Authorization'];
     }
};
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
     login(email:any, password:any, rememberMe:boolean = false, captcha:string| null = null) {
          return instance.post(`auth/login`, {email, password, rememberMe, captcha})
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
     },
     saveProfile (profile:UserProfileType) {
          return instance.put("profile", profile)
     }
}

export const SecurityAPI = {
     getCaptchaUrl () {
          return instance.get("security/get-captcha-url")
     }
}