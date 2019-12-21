import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Header = (props) => {
    return (
        <header className='header container-fluid'>
            <div className='container'>
                <FontAwesomeIcon icon={faAtom} />
                {props.isAuth ? props.login : <NavLink to='/login' className='login'><Button id='login'>login</Button></NavLink>}

            </div>
        </header>
    )
}

export default Header