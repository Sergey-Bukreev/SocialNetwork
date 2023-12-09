import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogsData:{id:number, name:string}[] = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Sveta"},
    {id: 3, name: "Sergio"},
    {id: 4, name: "Alisa"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Valera"}
]
let messageData:{id:number, message:string}[] = [
    {id: 1, message: "Nice to meet you"},
    {id: 2, message: "Hello"},
    {id: 3, message: "How are you"},
    {id: 4, message: "IT-Incubator"},
]
let posts:{id:number, message:string, likeCount:number}[] = [
    {id: 1, message: "Hi, how are you", likeCount: 15},
    {id: 2, message: "Its my first post", likeCount: 25},
    {id: 3, message: "Have a good Time", likeCount: 22}
]
ReactDOM.render(
    <App posts={posts} dialogData={dialogsData} messageData={messageData}/>,
  document.getElementById('root')
);