import React from 'react';
import Preloader from '../Preloader/Preloader';
import MyPostContainer from './MyPosts/MyPostContainer';
import profile from './Profile.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const Profile=(props)=>{
    if(!props.profile){
      return <Preloader></Preloader>
      
    }

    const selectMainPhohto=(e)=>{
      props.savePhotoThunkCreator(e.target.files[0])
      
    }
    return(
      
      <div className={profile.main}>
          <div>
              <img src={props.photo}></img>
              {props.isOwner && <input type='file' onChange={selectMainPhohto}></input>}
              <p>description:{props.profile.fullName}</p>
              <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatusThunkCreator} ></ProfileStatusWithHooks>
          </div>
          <MyPostContainer/>
      </div>
    )
  
}

export default Profile;