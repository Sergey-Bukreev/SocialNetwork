import React from 'react';
import classes from "../Users.module.css";
 export type PaginatorPropsType = {
     totalUserCount: number;
     pageSize: number;
     currentPage: number;
     onPageChanged: (page: number) => void;
 }
export const Paginator = (props:PaginatorPropsType) => {

    let pagesCount: number = Math.ceil(props.totalUserCount / props.pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(page =>
                <span className={props.currentPage === page ? classes.selectedPage : ""}
                      onClick={() => { props.onPageChanged(page) }}
                >
                        {page}
                    </span>
            )}
        </div>
    );
};

