import React from 'react';
import Preloader from '../Preloader/Preloader';
import MyPostContainer from './MyPosts/MyPostContainer';
import profile from './Profile.module.css'
import ProfileStatus from './ProfileStatus';

const Profile=(props)=>{
  
    if(!props.profile){
      return <Preloader></Preloader>
      
    }
    return(
      
      <div className={profile.main}>
          <div>
              <p>description:{props.profile.fullName}</p>
              <ProfileStatus status={props.status} updateStatus={props.updateStatusThunkCreator} ></ProfileStatus>
          </div>
          <MyPostContainer/>
      </div>
    )
  
}

export default Profile;