import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import s from './Users.module.css';
import usersImg from '../Default-img/user-logo.png';
import Preloader from '../common/Preloader'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator'

let Users = ({onPageChange, currentPage, totalUsersCount, pageSize, ...props}) => {

    return (<>{
        props.isFetching ? <Preloader /> : <div className='content container col-7' >
            {
                <Paginator onPageChange={onPageChange} currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize} />
            }
            {
                props.users.map(u => <div className='container row'>
                    <div className='col-3'>
                        <div>><NavLink to={'/Profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : usersImg} alt='img' /></NavLink></div>
                        <div>
                            {u.followed ?
                                <Button className={`${s.btn}`} disabled={props.buttonIsClicked}
                                    variant="primary"
                                    onClick={() => {
                                        props.ClickFollowThunkCreator(u.id)
                                    }}>Unfollow</Button> :
                                <Button className={`${s.btn}`} disabled={props.buttonIsClicked} variant="primary" onClick={() => { props.ClickUnFollowThunkCreator(u.id) }}>follow</Button>}
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='container row'>
                            <div className={`col-12 ${s.name}`} >{u.name}</div>
                        </div>
                        <div className='container row'></div>
                    </div>
                </div>
                )
            }
        </div>}</>

    )
}
export default Users;
