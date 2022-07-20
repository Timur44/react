import { Avatar, Button, Col, Row } from 'antd';
import {
    UserOutlined
  } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link} from 'react-router-dom';
import styles from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/redux-store';
import { getIsFetching } from '../../redux/users-selectors';
import { logout } from '../../redux/auth-reducer';
import Preloader from '../Preloader/Preloader';




const HeaderApp:React.FC=(props)=>{
    const {Header}=Layout
    const isAuth=useSelector((state:AppState)=>state.authReducer.isAuth)
    const isFetching=useSelector(getIsFetching)
    const login=useSelector((state:AppState)=>state.authReducer.login)
    const dispatch=useDispatch()
    const logOut=()=>{
        dispatch(logout())
    }

    return<>
        {isFetching ? <Preloader></Preloader> : null}
        
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <Row>
                <Col span={19}></Col>
                <Col span={5}>{isAuth ? 
                    <div className={styles.font_color}> {login} <Avatar style={{ backgroundColor: '#87d068',bottom:'2px',margin:'0px 10px'}} icon={<UserOutlined />} /><Button onClick={logOut}>LogOut</Button></div>
                    :<Button><Link to={'/login'}>Login</Link></Button>}</Col>
            </Row>
            
         </Header>
            
    </>
}

export default HeaderApp;