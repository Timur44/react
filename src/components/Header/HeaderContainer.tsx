
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Preloader from '../Preloader/Preloader';
import {logout} from '../../redux/auth-reducer'
import { AppState } from '../../redux/redux-store';



export type MapStateToPropsType={
    isFetching:boolean,
    isAuth:boolean,
    login:string|null
}
export type MapDispatchToPropsType={

    logout:()=>void
}

class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType>{

    
    render(){
        
        return <>
            {this.props.isFetching ? <Preloader></Preloader> : null}
            <Header {...this.props}></Header>
        </>
    }
}


let mapStateToProps=(state:AppState)=>({
    isFetching:state.authReducer.isFetching,
    isAuth:state.authReducer.isAuth,
    login:state.authReducer.login,
})
export default connect<MapStateToPropsType,MapDispatchToPropsType,{},AppState>(mapStateToProps,{logout})(HeaderContainer);

