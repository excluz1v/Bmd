import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    let iicon = (iconname) => {
        return <FontAwesomeIcon icon={iconname} />
    }
    return (

        <nav className={`${s.nav} container col-3`}>
            <ul>
                <button className='btn'>{iicon(faUser)}<NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink></button>
                <button className='btn'>{iicon(faEnvelope)}<NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink></button>
                <button className='btn'>{iicon(faNewspaper)}<NavLink to='/News' activeClassName={s.active}>News</NavLink></button>
                <button className='btn'>{iicon(faMusic)}<NavLink to='/Music' activeClassName={s.active}> Music</NavLink></button>
                <button className='btn'>{iicon(faCog)}<NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink></button>
                <button className='btn'><NavLink to='/users' activeClassName={s.active}>Users</NavLink></button>
                <button className='btn'><NavLink to='/login'>Login </NavLink></button>
            </ul>
        </nav>

    )
}
export default Navbar;