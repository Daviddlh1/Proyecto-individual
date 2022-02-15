import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import Filters from "../Filters/Filters";


export default function NavBar() {
    return (
        <div className={styles.container} >
            <Link className={styles.Link} to='/videogames'><button className={styles.home}>Home</button></Link>
           <SearchBar/>
           <Filters/> 
           <Link to='/videogame'><button className={styles.button}>Add Game</button></Link>
        </div>
    )
}