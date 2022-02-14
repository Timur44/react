
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUsersProfile,setUserThunkCreator,getStatusThunkCreator,updateStatusThunkCreator} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router'
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
  componentDidMount(){
      let userId=this.props.match.params.userId
      if(this.props.isAuth){
          userId=this.props.myUserId
          if(!userId){
            userId=2;
          }
      }else{
        if(!userId){
          userId=2;
        }
      }
       
       this.props.setUserThunkCreator(userId);
       this.props.getStatusThunkCreator(userId);
  }
  render(){
    
    return(
      <div >
         <Profile {...this.props} ></Profile>
      </div>
    )
  }
    
}

let mapStateToProps=(state)=>({

  profile:state.profileReducer.profile,
  status:state.profileReducer.status,
  myUserId:state.authReducer.userId,
  isAuth:state.authReducer.isAuth
});




export default compose(
  connect(mapStateToProps,{setUsersProfile,setUserThunkCreator,getStatusThunkCreator,updateStatusThunkCreator}),
  withRouter,
)(ProfileContainer);