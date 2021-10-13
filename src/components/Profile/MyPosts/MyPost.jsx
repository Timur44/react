import React from 'react';
import Post from './Post/Post';
import mypost from './MyPost.module.css'
const MyPost=(props)=>{
    let newPostElem=React.createRef()
    let addPost=()=>{
        let text=newPostElem.current.value;
        props.newMessage(text);
    }
    let post=props.addPosts.map(item=>{
       return <Post message={item.message}/>
    });
    let onChangePostText=()=>{
        let text=newPostElem.current.value;
        props.updateNewPostText(text);
    }
    return(
      
        <div>
            <div  className={mypost.item}>My post</div>
            <textarea ref={newPostElem} className={mypost.block} value={props.newPostText} onChange={onChangePostText}></textarea>
            <button onClick={addPost}>Create post</button>
            <div>New Post</div>
            <div>{post}</div>
        </div>
    )
}

export default MyPost;