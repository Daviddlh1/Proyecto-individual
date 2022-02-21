import React, {useState} from "react";
import { useSelector } from "react-redux";
import styles from "./Pagination.module.css"




export default function Pagination({gamesPerPage, totalAmount, pages}) {;
    let pageNumber = [];

    for(let i = 1;i <= Math.ceil(totalAmount/gamesPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <nav className={styles.container}>
            <div>
                {pageNumber.map(number => <a className={styles.page} key={number} onClick={() => pages(number)} >{number}</a>)}
            </div>
        </nav>
    )
}