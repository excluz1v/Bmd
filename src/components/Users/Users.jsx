import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import s from './Users.module.css';
import usersImg from '../Default-img/user-logo.png';
import Preloader from '../common/Preloader'
import { NavLink } from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }

    return (<>{
        props.isFetching ? <Preloader /> : <div className='content container col-7' >
            {
                page.map(pageNumber => (< span onClick={() => { props.onPageChange(pageNumber) }} className={props.currentPage === pageNumber ? s.selectedPage : ''} > {pageNumber}</span>))
            }
            {
                props.users.map(u => <div className='container row'>
                    <div className='col-3'>
                        <div>><NavLink to ={'/Profile/'+ u.id}><img src={u.photos.small != null ? u.photos.small : usersImg} alt='img' /></NavLink></div>
                        <div>
                            {u.followed ? <Button className={`${s.btn}`} variant="primary" onClick={() => { props.unfollow(u.id) }}>Unfollow</Button> : <Button className={`${s.btn}`} variant="primary" onClick={() => { props.follow(u.id) }}>follow</Button>}
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='container row'>
                            <div className={`col-9 ${s.name}`} >{u.name}</div>
                            <div className='col-3'>{"u.location.city"}{"u.location.country"}</div>
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
