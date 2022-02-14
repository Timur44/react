import React from 'react';
import Preloader from '../Preloader/Preloader';
import MyPostContainer from './MyPosts/MyPostContainer';
import profile from './Profile.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const Profile=(props)=>{
    debugger;
    if(!props.profile){
      return <Preloader></Preloader>
      
    }
    return(
      
      <div className={profile.main}>
          <div>
              <p>description:{props.profile.fullName}</p>
              <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatusThunkCreator} ></ProfileStatusWithHooks>
          </div>
          <MyPostContainer/>
      </div>
    )
  
}

export default Profile;