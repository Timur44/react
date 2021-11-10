
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUsersProfile,setUserThunkCreator} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';


class ProfileContainer extends React.Component{
  componentDidMount(){
        let userId=this.props.match.params.userId
        if(!userId){
          userId=2;
        }
       this.props.setUserThunkCreator(userId);
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
  profile:state.profileReducer.profile
})

let URLProfileContainer=withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUsersProfile,setUserThunkCreator}) (URLProfileContainer);