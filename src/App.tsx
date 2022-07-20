import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Preloader/Preloader'
import { setInitializedApp } from './redux/app-reducer';
import {LoginContainer} from './components/Login/LoginContainer';
import Nav from './components/Nav/Nav';
import { HelmetProvider } from 'react-helmet-async';
import { ThunkAction } from 'redux-thunk';
import store, { AppState } from './redux/redux-store';
import { ActionTypes } from './redux/users-reducer';
import { UsersPage } from './components/Users/UsersContainer';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import HeaderApp from './components/Header/Header';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label:any,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}


const items: MenuItem[] = [
  getItem('Account', 'sub1', <UserOutlined />, [
    getItem(<NavLink to='/profile'>Profile</NavLink>, '3',),
    getItem(<NavLink to='/dialogs'>Messages</NavLink>, '4'),
    getItem(<NavLink to='/users'>Users</NavLink>, '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];








const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
type MapStateToProps=ReturnType<typeof mapStateToProps>
type MapDispatchToProps={
  setInitializedApp:()=>(dispatch:any)=>ThunkAction<void,AppState,unknown,ActionTypes>,
  
  
}
type IProps={
  store:any
}

const App:React.FC< MapStateToProps & MapDispatchToProps & IProps >=(props)=>{
      useEffect(()=>{
        props.setInitializedApp();
      })
      
      const [collapsed, setCollapsed] = useState(false);
      if(!props.initialized){ return <Preloader></Preloader> } 
      return (
        <BrowserRouter>
              <Layout style={{ minHeight: '100vh' }}>
              <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['sub1']} mode="inline" items={items} />
              </Sider>
              <Layout className="site-layout">
                <HeaderApp></HeaderApp>
                <Content style={{ margin: '16px' }}>
                    <Route exact path='/dialogs' 
                      render={()=>{ return <React.Suspense fallback={<div>Loading...</div>}> 
                        <DialogsContainer store={props.store}/> 
                    </React.Suspense> } }/> 
                    <Route exact path='/profile/:userId?' 
                      render={()=>{ return <React.Suspense fallback={<div>Loading...</div>}> <ProfileContainer store={props.store}/> 
                    </React.Suspense> } }/> 
                    <Route exact path='/users' render={()=> <UsersPage/> }/> 
                    <Route exact path='/login' render={()=> <LoginContainer/> }/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Samurai Social Network created by Me</Footer>
              </Layout>
            </Layout>
        </BrowserRouter>
              
      )
}
  
    

const mapStateToProps=(state:AppState)=>({
  initialized:state.appReducer.initialized
})
let AppContainer=compose<React.ComponentType>(
  connect(mapStateToProps,{setInitializedApp}))(App);

const SamurayJSApp: React.FC =(props:any)=>{
  return(
    <HelmetProvider>
       <Provider store={store}>
          <AppContainer/>
      </Provider>
    </HelmetProvider>
  )
}
export default SamurayJSApp

