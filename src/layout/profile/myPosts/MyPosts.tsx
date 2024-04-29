import React from 'react';
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { IPost } from "../../../redux/profile-reducer/profileReducer";
import { MapDispatchToPropsType, MapStateToPropsType } from "./MyPostsContainer";
import { AddPostForm, FormDataPost } from "./AddPostForm";

export type MyPostsPropsType =  MapStateToPropsType & MapDispatchToPropsType;

export const MyPosts: React.FC<MyPostsPropsType> = (props: MyPostsPropsType) => {
    const postElements: JSX.Element[] = props.profilePage.postsData.map((post: IPost) => (
        <Post key={post.id} message={post.message} likeCount={post.likeCount} />
    ));

    const addPost = (values: FormDataPost) => {
        props.addPost(values.postBody);
    };

    return (
        <div className={classes.postsBlock}>
            <div className={classes.addPostForm}>
                <AddPostForm onSubmit={addPost} />
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};
