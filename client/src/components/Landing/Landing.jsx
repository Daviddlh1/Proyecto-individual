import React from "react";
import {Link} from "react-router-dom";
import image from "../../assets/images/gamers.jpg";
import styles from "./Landing.module.css";

export default function Landing() {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={image} alt="" />
            <Link to='/videogames' ><button className={styles.button}>Press Start</button></Link>
        </div>
    )
}

