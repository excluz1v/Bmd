import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return (
        <nav className="nav container col-2">
            <ul>
                <button className='btn'><FontAwesomeIcon icon={faSearch} /><a href='/'>Search</a></button>

            </ul>
        </nav>
    )
}
export default SideBar;