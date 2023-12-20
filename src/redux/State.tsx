

let rerenderEntireTree = (state:any)=> {
    console.log("state change")
}
export let state = {
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
        {id: 3, message: "Have a good Time", likeCount: 22},

    ],
    newPostText: "Hello"
}

export const addPost = () => {
    let newPost:{id:number, message:string, likeCount:number} = {
        id: 5,
        message: state.newPostText,
        likeCount: 0
    }
    state.postsData.push(newPost)
    state.newPostText = ""
    rerenderEntireTree(state)
}
export const subscribe = (observer:(state:any)=>void) => {
    rerenderEntireTree = observer
}

export const updateNewPostText = (newText:string) => {
state.newPostText= newText;
rerenderEntireTree(state)
}