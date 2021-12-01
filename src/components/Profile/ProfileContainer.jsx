
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
        if(!userId){
          userId=2;
        }
       this.props.setUserThunkCreator(userId);
       this.props.getStatusThunkCreator(userId);
       debugger;
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
  status:state.profileReducer.status
});




export default compose(
  connect(mapStateToProps,{setUsersProfile,setUserThunkCreator,getStatusThunkCreator,updateStatusThunkCreator}),
  withRouter,
)(ProfileContainer);