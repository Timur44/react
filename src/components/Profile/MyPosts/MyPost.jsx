import React from 'react';
import Post from './Post/Post';
import mypost from './MyPost.module.css';
import { Field, reduxForm } from 'redux-form';

const addNewPost=(props)=>{
    return <form onSubmit={props.handleSubmit}>
        <Field component="textarea" name="addPostText" className={mypost.block} defaultValue="it-kamasutra"></Field>
        <button>Create post</button>
    </form> 
}

const AddNewPostRedux=reduxForm({form:'profilePost'})(addNewPost)


const MyPost=(props)=>{

    let addPostText=(value)=>{
        props.addPost(value.addPostText);
        value.addPostText=''
    }

    let post=props.profilePage.postMessage.map(item=>{
       return <Post message={item.message}/>
    });



    return(
      
        <div>
            <div  className={mypost.item}>My post</div>
            <div>New Post</div>
            <div>{post}</div>
            <AddNewPostRedux onSubmit={addPostText}/>
        </div>
    )
}

export default MyPost;