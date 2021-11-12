import React from 'react';
import Preloader from '../Preloader/Preloader';
import MyPostContainer from './MyPosts/MyPostContainer';
import profile from './Profile.module.css'

const Profile=(props)=>{
  
    if(!props.profile){
      return <Preloader></Preloader>
      
    }
    return(
      
      <div className={profile.main}>
          <div>
            <img className={profile.main_img} src="https://wallpapersprinted.com/download/2/mountain_road_scenery-wallpaper-3840x2400.jpg"></img>
          </div>
          <div>

              
              <p>description:{props.profile.fullName}</p>
          </div>
          <MyPostContainer/>
      </div>
    )
  
}

export default Profile;