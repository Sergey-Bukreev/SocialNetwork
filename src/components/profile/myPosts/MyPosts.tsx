import React from 'react';
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import {IPost} from "../../../redux/profileReducer";
import {MapDispatchToPropsType, MapStateToPropsType} from "./MyPostsContainer";
import {AddPostForm, FormDataPost} from "./AddPostForm";
export type MyPostsPropsType =  MapStateToPropsType & MapDispatchToPropsType

export const MyPosts: React.FC<MyPostsPropsType> = (props: MyPostsPropsType) => {

    const postElement: JSX.Element[] = props.profilePage.postsData.map((el: IPost) => (
        <Post key={el.id} message={el.message} likeCount={el.likeCount} />
    ));

const addPost = (values:FormDataPost)=> {
    props.addPost(values.postBody)
}
    return (
        <div className={classes.postsBlock}>
            <h3>My Post</h3>
            <div>
                <AddPostForm  onSubmit={addPost}/>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    );
};
