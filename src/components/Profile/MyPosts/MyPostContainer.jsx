import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer.js';
import MyPost from './MyPost';

let mapStateToProps=(state)=>{
    return {
        profilePage:state.profileReducer
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        addPost:(newPostText)=>{
            dispatch(addPostActionCreator(newPostText));
        }
    }
}
const MyPostContainer=connect(mapStateToProps,mapDispatchToProps)(MyPost);


export default MyPostContainer;