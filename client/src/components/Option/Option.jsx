import React from "react";
import styles from "./Option.module.css"



export default function Option({platformOrGenre}) {
    return (
        <div className={styles.container}>
            <p className={styles.option}>{platformOrGenre}</p>
        </div>
    )
}