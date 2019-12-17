import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <header className='header container-fluid'>
            <div className='container'>
            <FontAwesomeIcon icon={faAtom} />
            
            </div>
        </header>
    )
}

export default Header