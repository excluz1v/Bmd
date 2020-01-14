import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import s from './Paginator.module.css';
import { useState } from 'react';


let Paginator = ({ totalItemsCount, pageSize, onPageChange, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>{
        portionNumber > 1 ? <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> : undefined}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(pageNumber => < span key={pageNumber} onClick={() => { onPageChange(pageNumber) }} className={currentPage === pageNumber ? s.selectedPage : ''} > {pageNumber}</span>)
        }
        {portionCount > portionNumber ?  <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button> : undefined}
    </div>

}
export default Paginator;
