export type FollowAction = {type:"FOLLOW", userId:number}
export type UnFollowAction = {type:"UNFOLLOW", userId:number}
export type SetUsersAction = {type:"SET-USERS", users:IUsers[]}
export type SetToggleIsFetching = {type:"TOGGLE-IS-FETCHING", isFetching:boolean}
export type SetCurrentPageAction = {type:"SET-CURRENT-PAGE", currentPage:number}
export type SetTotalUsersCountAction = {type:"SET-TOTAL-USERS-COUNT", totalCount:number}
export type UsersAction = FollowAction | UnFollowAction | SetUsersAction | SetCurrentPageAction | SetTotalUsersCountAction | SetToggleIsFetching
export type IUsers ={ name: string, id: number, uniqueUrlName: null |string, photos: { small: null |string, large: null| string }, status: null| string, followed: boolean }
export type UsersState = { usersData: IUsers[], pageSize:number, totalUserCount:number, currentPage:number, isFetching:boolean }
export let initialState:UsersState = {
    usersData: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage:3,
    isFetching: true
}
export const follow = (userId:number) => {return {type:"FOLLOW", userId} as const}
export const unfollow = (userId:number ) => {return {type:"UNFOLLOW", userId} as const}
export const setUsers = (users:IUsers[] ) => {return {type:"SET-USERS", users } as const}
export const setCurrentPage = (currentPage:number)=> {return{type:"SET-CURRENT-PAGE", currentPage} as const}
export const setTotalUsersCount = (totalCount:number) => {return {type:"SET-TOTAL-USERS-COUNT", totalCount} as const}
export const setToggleIsFetching = (isFetching:boolean) => {return {type:"TOGGLE-IS-FETCHING", isFetching} as const}
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
        default:
            return usersState;
    }
};