export type FollowAction = {type:"FOLLOW", userId:number}
export type UnFollowAction = {type:"UNFOLLOW", userId:number}
export type SetUsersAction = {type:"SET-USERS", users:IUsers[]}
export type UsersAction = FollowAction | UnFollowAction | SetUsersAction
export type IUsers ={id:number, photoUrl:string | null, fullName:string, status:string, followed:boolean, location:{city:string, country:string}}
export type UsersState = { usersData: IUsers[] }
export let initialState:UsersState = {
    usersData: [
        {id: 1, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPVvnObWUEcuI8f-gy9eJrxr8lVc3BveOeSQ&usqp=CAU", fullName: "Sergio", status:"Online", followed:true, location:{city:"Geneve", country:"Swiss"}},
        {id: 2, photoUrl:null, fullName: "Dymuch", status:"Online", followed:true, location:{city:"Minsk", country:"Belarus"}},
        {id: 3, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPVvnObWUEcuI8f-gy9eJrxr8lVc3BveOeSQ&usqp=CAU", fullName: "Alice", status:"Online", followed:true, location:{city:"Geneve", country:"Swiss"}},
        {id: 4, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPVvnObWUEcuI8f-gy9eJrxr8lVc3BveOeSQ&usqp=CAU", fullName: "Ben", status:"Onlne", followed:true, location:{city:"Zurich", country:"Swiss"}},
        {id: 5, photoUrl:null, fullName: "Robert", status:"Online", followed:true, location:{city:"Vien", country:"Austria"}}
    ],
}
export const followActionCreator = (userId:number) => {return {type:"FOLLOW", userId} as const}
export const unfollowActionCreator = (userId:number ) => {return {type:"UNFOLLOW", userId} as const}
export const setUsersActionCreator = (users:IUsers[] ) => {return {type:"SET-USERS", users } as const}
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
            return { ...usersState, usersData: [...usersState.usersData, ...action.users] };
        default:
            return usersState;
    }
};