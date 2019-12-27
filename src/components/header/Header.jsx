import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Header = (props) => {
    return (
        <header className='header container-fluid'>
            <div className={`container row ${s.login}`}>
                <FontAwesomeIcon icon={faAtom} id={`${s.icon}`} />
                {props.isAuth ?
                    <div>{props.login} <button onClick={()=>{props.AuthLogOutThunk()}} id={`${s.login}`}>logOut</button></div> :
                   <NavLink to='/login' className={`${s.login}`}><Button id={`${s.login}`}>login</Button></NavLink>}

            </div>
        </header>
    )
}

export default Header