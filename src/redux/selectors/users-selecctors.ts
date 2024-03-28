import {RotState} from "../Redux-Store";

export const getUsersPage = (state:RotState) => {
    return state.usersPage
}
export const getPageSize = (state:RotState) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state:RotState) => {
    return state.usersPage.totalUserCount
}
export const getCurrentPage = (state:RotState) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state:RotState) => {
    return state.usersPage.isFetching
}
export const getFollowInProgress = (state:RotState) => {
    return state.usersPage.followInProgress
}