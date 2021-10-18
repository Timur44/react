import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer.js';
import MyPost from './MyPost';


const MyPostContainer=(props)=>{
    let store=props.store.getState();
    let addPost=()=>{
        props.store.dispatch(addPostActionCreator());
    }
    let ChangePostText=(text)=>{
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    

    return(
        <MyPost updateNewPostTextActionCreator={ChangePostText} addPostActionCreator={addPost} posts={store.profileReducer.postMessage} standartValue={store.profileReducer.newPostText}></MyPost>
    )
}

export default MyPostContainer;