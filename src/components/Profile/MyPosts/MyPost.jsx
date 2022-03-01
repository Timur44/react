import React from 'react';
import Post from './Post/Post';
import mypost from './MyPost.module.css';
import { Field, reduxForm } from 'redux-form';
import {maxLengthCreator, requiredField } from '../../../utils/validations/valid';
import { Textarea } from '../../Preloader/FormsControls';
const maxLength10=maxLengthCreator(10)
const addNewPost=(props)=>{
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="addPostText" className={mypost.block} placeholder="write somethimg down" validate={[requiredField,maxLength10]} text={`input`}></Field>
        <button>Create post</button>
    </form> 
}

const AddNewPostRedux=reduxForm({form:'profilePost'})(addNewPost)


const MyPost=React.memo((props)=>{
  
    
    console.log('awadwd')
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

    
})

export default MyPost;