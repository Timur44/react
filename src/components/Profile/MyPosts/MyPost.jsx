import React from 'react';
import Post from './Post/Post';
import mypost from './MyPost.module.css';


const MyPost=(props)=>{

    let newPostElem=React.createRef();
    
    let onChangePostText=()=>{
        let text=newPostElem.current.value;
        props.updateNewPostText(text);
    }

    let addPostText=()=>{
        props.addPost();
    }

    let post=props.profilePage.postMessage.map(item=>{
       return <Post message={item.message}/>
    });



    return(
      
        <div>
            <div  className={mypost.item}>My post</div>
            <textarea ref={newPostElem} className={mypost.block} value={props.profilePage.newPostText} onChange={onChangePostText}></textarea>
            <button onClick={addPostText}>Create post</button>
            <div>New Post</div>
            <div>{post}</div>
        </div>
    )
}

export default MyPost;