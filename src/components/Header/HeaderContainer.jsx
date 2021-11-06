import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Preloader from '../Preloader/Preloader';
import { setUserData,changeLoader} from '../../redux/auth-reducer';


class HeaderContainer extends React.Component{

    componentDidMount(){
        
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials:true
        }).then(responce=>{
            this.props.changeLoader(true);
            if(responce.data.resultCode===0){
                debugger;
                this.props.changeLoader(false);
                let {id,email,login}=responce.data.data;
                this.props.setUserData(id,email,login)
            }
        })
    }
    render(){
        
        return <>
            {this.props.isFetching ? <Preloader></Preloader> : null}
            <Header {...this.props}></Header>
        </>
    }
}


let mapStateToProps=(state)=>({
    isFetching:state.authReducer.isFetching,
    isAuth:state.authReducer.isAuth,
    login:state.authReducer.login
})
export default connect(mapStateToProps,{setUserData,changeLoader})(HeaderContainer);

