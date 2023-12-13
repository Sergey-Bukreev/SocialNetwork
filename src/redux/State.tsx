import {rerenderEntireTree} from "../render";


export let State = {
    dialogsData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Sergio"},
        {id: 4, name: "Alisa"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ],
    messageData: [
        {id: 1, message: "Nice to meet you"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you"},
        {id: 4, message: "IT-Incubator"},
    ],
    postsData: [
        {id: 1, message: "Hi, how are you", likeCount: 15},
        {id: 2, message: "Its my first post", likeCount: 25},
        {id: 3, message: "Have a good Time", likeCount: 22}
    ]
}

export const addPost = (postMessage:string) => {
    let newPost:{id:number, message:string, likeCount:number} = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    State.postsData.push(newPost)
    rerenderEntireTree(State)
}