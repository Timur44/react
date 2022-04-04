import React, { useState } from 'react';
import Preloader from '../Preloader/Preloader';
import MyPostContainer from './MyPosts/MyPostContainer';
import profile from './Profile.module.css'
import ProfileDataReduxForm from './ProfileDataForm';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const Profile=(props)=>{

    let [editMode,setEditMode]=useState(false)

    if(!props.profile){
      return <Preloader></Preloader>
      
    }
    const selectMainPhohto=(e)=>{
      props.savePhotoThunkCreator(e.target.files[0])
      
    }
    const goToEditMode=()=>{
      setEditMode(true)
    }
    const onSubmit=(formData)=>{
      props.saveProfile(formData);
      setEditMode(false);
    }
    return(
      
      <div className={profile.main}>
        {editMode ? <ProfileDataReduxForm {...props} selectMainPhohto={selectMainPhohto} onSubmit={onSubmit}></ProfileDataReduxForm> :<ProfileData {...props} selectMainPhohto={selectMainPhohto}  goToEditMode={goToEditMode}></ProfileData>}
        
        <MyPostContainer/>
      </div>
    )
  
}

const ProfileData=(props)=>{
  
  
 
  
  return <div>
  <img src={props.photo}></img>
  {props.isOwner && <input type='file' onChange={props.selectMainPhohto}></input>}
  {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
  <p>description:{props.profile.fullName}</p>
  <div>Looking for a job?:{props.profile.lookingForAJob ? "yes" : "no"}</div>
  {props.profile.lookingForAJob && <div>My professional skills:{props.profile.lookingForAJobDescription}</div>}
  <div><b>About me</b> {props.profile.aboutMe }</div>
  <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatusThunkCreator} ></ProfileStatusWithHooks>
</div>
}

export default Profile;