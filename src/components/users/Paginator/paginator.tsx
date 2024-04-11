import React, { useState } from 'react';
import classes from "../Users.module.css";
import styles from "./Paginator.module.css";

export type PaginatorPropsType = {
    totalUserCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (page: number) => void;
}

export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount: number = Math.ceil(props.totalUserCount / props.pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 10
    let portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber: number = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber: number = Math.min(portionNumber * portionSize, pagesCount);


    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>{'<'}</button>}
            <div className={styles.paginationNumbers}>
                {pages
                    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page =>
                            <span className={props.currentPage === page ? classes.selectedPage : ""} key={page}
                                  onClick={() => { props.onPageChanged(page) }}>
                        {page}
                    </span>
                    )}
            </div>

            {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>{'>'}</button>}
        </div>
    );
};
