import React from "react";
import styles from "./Loading.module.css"


export default function Loading(){
    return (
        <div className={styles.container}>
            <div className={styles.loading_container}>
                <div className={styles.cube}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.loading}>
                    <div>
                        <h1>Loading</h1>
                        <p>. . .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}