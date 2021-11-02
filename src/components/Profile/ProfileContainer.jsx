import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUsersProfile} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component{
  componentDidMount(){
        let userId=this.props.match.params.userId
        if(!userId){
          userId=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(responce=>{
          this.props.setUsersProfile(responce.data);
        })
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

export default connect(mapStateToProps,{setUsersProfile}) (URLProfileContainer);