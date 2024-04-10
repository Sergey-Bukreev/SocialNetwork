import { ProfileState, AddPostAction, NewPostTextAction, addPost, profileReducer } from "./profileReducer";

// test("correct post should be added", () => {
//     const startState: ProfileState = {
//         postsData: [
//             { id: 1, message: "Hi, how are you", likeCount: 15 },
//             { id: 2, message: "Its my first post", likeCount: 25 },
//             { id: 3, message: "Have a good Time", likeCount: 22 },
//         ],
//
//         profile:null,
//         status:""
//     };
//
//
//     const postText:string = "post text"
//     const addPostAction: AddPostAction = addPost(postText);
//     const endState: ProfileState = profileReducer(startState, addPostAction);
//
//     expect(startState).not.toEqual(endState)
//     expect(endState.postsData).toHaveLength(startState.postsData.length + 1);
//     expect(endState.postsData).toHaveLength(4)
//
// });

// test("updating new post text should change the newPostText property", ()=> {
//     const startState: ProfileState = {
//         postsData: [
//             { id: 1, message: "Hi, how are you", likeCount: 15 },
//             { id: 2, message: "Its my first post", likeCount: 25 },
//             { id: 3, message: "Have a good Time", likeCount: 22 },
//         ],
//
//         profile:null,
//         status:""
//     };
//     const newPostText:string = "Hellow its new Post Text"
//     const updateNewPostTextAction:NewPostTextAction = updateNewPostText(newPostText)
//     const endState:ProfileState = profileReducer(startState, updateNewPostTextAction)
//
//     expect(startState).not.toEqual(endState)
//     expect(startState.newPostText).toBe("Hello")
//     expect(endState.newPostText).toEqual("Hellow its new Post Text");
//     expect(endState.postsData.length).toEqual(startState.postsData.length)
// })
export {}