import React from "react";
import { Link } from "react-router-dom";
import Option from "../Option/Option";
import styles from "./GamesCard.module.css"



export default function GamesCard({id, name, image, genres}) {
    return(
        <Link to={`/videogame/${id}`}>
            <div className={styles.container}>
                <img className={styles.img} src={image} alt="" />
                <div className={styles.info_container}>
                    <h2>{name}</h2>
                    <p className={styles.genres} >Genres:</p>
                    <div className={styles.genres_container}>
                        {genres.map((g, i) => g.id?
                        <Option key={id} platformOrGenre={g.name} />
                        :<Option key={i} platformOrGenre={g} />)}
                    </div>
                </div>
            </div>
        </Link>
    )
}