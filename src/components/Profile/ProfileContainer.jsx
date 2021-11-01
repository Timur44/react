import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUsersProfile} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component{
  componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(responce=>{
          this.props.setUsersProfile(responce.data);
        })
  }
  render(){
    return(
      <div >
         <Profile {...this.props} profile={this.props.profile}></Profile>
      </div>
    )
  }
    
}

let mapStateToProps=(state)=>({
  profile:state.profileReducer.profile
})

export default connect(mapStateToProps,{setUsersProfile}) (ProfileContainer);