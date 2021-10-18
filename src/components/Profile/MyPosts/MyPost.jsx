import React from 'react';
import Post from './Post/Post';
import mypost from './MyPost.module.css';


const MyPost=(props)=>{

    let newPostElem=React.createRef();
    
    let onChangePostText=()=>{
        let text=newPostElem.current.value;
        props.updateNewPostTextActionCreator(text);
    }

    let addPost=()=>{
        props.addPostActionCreator();
    }

    let post=props.posts.map(item=>{
       return <Post message={item.message}/>
    });



    return(
      
        <div>
            <div  className={mypost.item}>My post</div>
            <textarea ref={newPostElem} className={mypost.block} value={props.standartValue} onChange={onChangePostText}></textarea>
            <button onClick={addPost}>Create post</button>
            <div>New Post</div>
            <div>{post}</div>
        </div>
    )
}

export default MyPost;