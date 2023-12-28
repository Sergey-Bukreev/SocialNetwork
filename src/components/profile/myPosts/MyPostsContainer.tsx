import React from 'react';
import { Action } from "redux";
import {addPostActionCreator, ProfileState, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


export type MyPostsContainerPropsType = {
    dispatch: (action: Action) => void;
    profilePage:ProfileState
};

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (
    props: MyPostsContainerPropsType
) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let addPost = (): void => {
                    store.dispatch(addPostActionCreator());
                };
                let onPostChange = (text: string): void => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };

                return (
                    <div>
                        <MyPosts updateNewPostText={onPostChange} addPost={addPost} profilePage={store.getState().profilePage}/>
                    </div>
                );
            }}
        </StoreContext.Consumer>
    );
};
