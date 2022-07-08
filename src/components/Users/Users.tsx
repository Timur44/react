
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import  UnfollowActionType, { FilterStateType }  from '../../redux/users-reducer';
import Paginator from './Paginator';
import u from './Users.module.css'
type Props={
    filter:FilterStateType
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onPageChanged:(page:number,filter:FilterStateType)=>void
    portionSize?:number
    unfollowThunkCreator:(id:number)=>void
    followThunkCreator:(id:number)=>void
    disable:Array<any>
    users:Array<any>
    unfollow:(userId:number)=>void
    follow:(userId:number)=>void
    disableBtn:Array<number>
    onFilterChanged:(filter:FilterStateType)=>void
   
}
let Users:React.FC<Props>=(props)=>{
    return <div>

            <UsersSearchForm onFilterChanged={props.onFilterChanged}></UsersSearchForm>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} filter={props.filter}></Paginator>
            {props.users.map(users=><div className={u.flex} key={users.id}>
                <span >
                    <div>
                        <NavLink to={'/profile/'+ users.id}>
                            <img src={users.photoUrl!=null ? users.photoUrl : "http://avotarov.ru/picture/avatar-100/kartinki/924.jpg" } alt="" />
                        </NavLink>
                       
                    </div>
                    <div>
                        {users.followed 
                        ? <button disabled={props.disable.some(id=>id===users.id)} onClick={
                            ()=>{
                               props.unfollowThunkCreator(users.id);
                            }
                        }>Unfollow</button> 
                        : <button disabled={props.disable.some(id=>id===users.id)} onClick={
                            ()=>{
                                props.followThunkCreator(users.id);
                            }
                        }>Follow</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{users.name}</div>
                        <div>{users.status}</div>
                    </span>
                    <span>
                        <div>{"users.location.city"}</div>
                        <div>{"users.location.country"}</div>
                    </span>
                </span>
                
            </div>)}
        </div>
}






export default Users


type UsersSearchFormType={
    onFilterChanged:(filter:FilterStateType)=>void
}
export const UsersSearchForm:React.FC<UsersSearchFormType>=React.memo((props)=>{
    return <div>
        <Formik
            initialValues={{term:'',friend:null}}
            validate={values => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values:FilterStateType, { setSubmitting }) => {
                props.onFilterChanged(values)

                setSubmitting(false)
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <Field type="text" name="term" />
                <Field name="friend" as="select">
                    <option value="null">All</option>
                    <option value="true">Only followed</option>
                    <option value="false">Only unfollowed</option>
                </Field>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </Form>
            )}
     </Formik>
    </div>
})
