
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUsersProfile,setUserThunkCreator,getStatusThunkCreator,updateStatusThunkCreator,updatePhoto,savePhotoThunkCreator} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
  refresh(){
    let userId=this.props.match.params.userId;
    if(userId!==this.props.myUserId){
      this.props.updatePhoto('https://sun9-20.userapi.com/impg/6iSbu-qbkquC1-UzQ-RiLVbR7OYKcN8FQjGa-g/PW5QDnxrMjs.jpg?size=960x1280&quality=96&sign=1d561119e23872d9bc39386e5d3cbffd&type=album')
    }
    if(!userId){
      if(this.props.isAuth){
        userId=this.props.myUserId;
    }}
    else{
      this.props.updatePhoto( "http://avotarov.ru/picture/avatar-100/kartinki/924.jpg")
    }
   
    this.props.setUserThunkCreator(userId);
    this.props.getStatusThunkCreator(userId);
  }
  
  componentDidMount(){
    this.refresh()
  }
  componentDidUpdate(prevProps,prevState, snapshot) {

    if(this.props.match.params.userId!==prevProps.match.params.userId){
      this.props.updatePhoto( "http://avotarov.ru/picture/avatar-100/kartinki/924.jpg")
      this.refresh()
      
    }
   
    
  
  }
  render(){
    
    return(
      <div >
         <Profile {...this.props} isOwner={!this.props.match.params.userId} ></Profile>
      </div>
    )
  }
    
}

let mapStateToProps=(state)=>({
  
  profile:state.profileReducer.profile,
  status:state.profileReducer.status,
  myUserId:state.authReducer.userId,
  isAuth:state.authReducer.isAuth,
  photo:state.profileReducer.photoURL
});




export default compose(
  connect(mapStateToProps,{setUsersProfile,setUserThunkCreator,getStatusThunkCreator,updateStatusThunkCreator,updatePhoto,savePhotoThunkCreator}),
  withRouter,
)(ProfileContainer);