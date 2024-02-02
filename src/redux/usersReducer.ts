import {UsersAPI} from "../api/api";
import {Action, Dispatch} from "redux";

export type FollowAction = {type:"FOLLOW", userId:number}
export type UnFollowAction = {type:"UNFOLLOW", userId:number}
export type SetUsersAction = {type:"SET-USERS", users:IUsers[]}
export type SetToggleIsFetching = {type:"TOGGLE-IS-FETCHING", isFetching:boolean}
export type SetToggleFollowInProgress = {type:"TOGGLE-FOLLOW-IN-PROGRESS", isFetching:boolean, userId:number}
export type SetCurrentPageAction = {type:"SET-CURRENT-PAGE", currentPage:number}
export type SetTotalUsersCountAction = {type:"SET-TOTAL-USERS-COUNT", totalCount:number}
export type UsersAction = FollowAction | UnFollowAction | SetUsersAction | SetCurrentPageAction | SetTotalUsersCountAction | SetToggleIsFetching | SetToggleFollowInProgress
export type IUsers ={ name: string, id: number, uniqueUrlName: null |string, photos: { small: null |string, large: null| string }, status: null| string, followed: boolean }
export type UsersState = { usersData: IUsers[], pageSize:number, totalUserCount:number, currentPage:number, isFetching:boolean, followInProgress: number[]}
export let initialState:UsersState = {
    usersData: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage:3,
    isFetching: true,
    followInProgress:[]


}
export const acceptFollow = (userId:number) => {return {type:"FOLLOW", userId} as const}
export const acceptUnfollow = (userId:number ) => {return {type:"UNFOLLOW", userId} as const}
export const setUsers = (users:IUsers[] ) => {return {type:"SET-USERS", users } as const}
export const setCurrentPage = (currentPage:number)=> {return{type:"SET-CURRENT-PAGE", currentPage} as const}
export const setTotalUsersCount = (totalCount:number) => {return {type:"SET-TOTAL-USERS-COUNT", totalCount} as const}
export const setToggleIsFetching = (isFetching:boolean) => {return {type:"TOGGLE-IS-FETCHING", isFetching} as const}
export const setToggleFollowInProgress = (isFetching:boolean, userId:number)=> {return{type:"TOGGLE-FOLLOW-IN-PROGRESS", isFetching, userId} as const}
export const getUsers = (currentPage:number, pageSize:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch(setToggleIsFetching(true))
        UsersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setToggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }

}
export const follow = (userId:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch(setToggleFollowInProgress(true, userId))
        UsersAPI.followUser(userId).then(data => {
            if(data.resultCode === 0) {dispatch(acceptFollow(userId))}
            dispatch(setToggleFollowInProgress(false, userId))
        })
    }

}
export const unfollow = (userId:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch(setToggleFollowInProgress(true, userId))
        UsersAPI.unfollowUser(userId).then(data => {
            if(data.resultCode === 0) {dispatch(acceptUnfollow(userId))}
            dispatch(setToggleFollowInProgress(false, userId))
        })
    }

}
export const usersReducer = (usersState: UsersState = initialState, action: UsersAction):UsersState => {


    switch (action.type) {
        case "FOLLOW": {
           return  {...usersState, usersData: usersState.usersData.map(user=>{
               if(user.id === action.userId)
               {return{...user, followed:true}}
               return user
               })}
        }
            break;
        case "UNFOLLOW":{
            return  {...usersState, usersData: usersState.usersData.map(user=>{
                    if(user.id === action.userId)
                    {return{...user, followed:false}}
                    return user
                })}
        }
            break;
        case "SET-USERS":
            return { ...usersState, usersData:action.users };
        case "SET-CURRENT-PAGE" :
            return {...usersState, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT" :
            return {...usersState, totalUserCount:action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return  {...usersState, isFetching: action.isFetching}
        case "TOGGLE-FOLLOW-IN-PROGRESS":
            return {...usersState, followInProgress:action.isFetching
                    ? [...usersState.followInProgress, action.userId]
                    : usersState.followInProgress.filter(id=>id !== action.userId)
            }
        default:
            return usersState;
    }
};