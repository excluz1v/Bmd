import React from 'react';
import load from './loading.png';
import s from './preloader.module.css'


let Preloader = () => {
    return (
        <img  className={s.load} src={load} alt='img'></img>
    )
}
export default Preloader