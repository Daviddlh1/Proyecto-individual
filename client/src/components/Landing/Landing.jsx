import React from "react";
import {Link} from "react-router-dom";
import image from "../../assets/images/gamers.jpg";
import styles from "./Landing.module.css";

export default function Landing() {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to='/videogames' >
            <div className={styles.loading_container}>
                <div className={styles.cube}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <Link to='/videogames' ><button className={styles.button}>Press Start</button></Link>
                </div>
            </div>
            </Link>
            {/* <div className={styles.container}>
                <img className={styles.img} src={image} alt="" />
            </div> */}
        </div>
    )
}

