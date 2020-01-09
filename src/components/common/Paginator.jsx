import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import s from './Paginator.module.css';


let Paginator = ({totalUsersCount,pageSize,onPageChange,currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }

    return <div>{
        page.map(pageNumber => (< span onClick={() => {onPageChange(pageNumber) }} className={currentPage === pageNumber ? s.selectedPage : ''} > {pageNumber}</span>))
    }</div>

}
export default Paginator;
