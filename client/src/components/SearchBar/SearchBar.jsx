import React from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";
import styles from "./SearchBar.module.css"



export default function SearchBar() {
    const dispatch = useDispatch();

    
    
    function onChangeHandler(e) {
        e.preventDefault();
        dispatch(searchByName(e.target.value)); 
    }


    return(
        <div>
            <input className={styles.input} type="text" placeholder="search ..." onChange={onChangeHandler} />
        </div>
    )
}