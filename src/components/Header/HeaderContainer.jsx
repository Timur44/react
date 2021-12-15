
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Preloader from '../Preloader/Preloader';
import { setUserData,changeLoader,loginThunkCreator,logOut} from '../../redux/auth-reducer';



class HeaderContainer extends React.Component{

    componentDidMount(){
        debugger
        this.props.loginThunkCreator()
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
export default connect(mapStateToProps,{setUserData,changeLoader,loginThunkCreator,logOut})(HeaderContainer);

