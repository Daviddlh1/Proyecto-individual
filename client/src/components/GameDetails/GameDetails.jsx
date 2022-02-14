import React, {useEffect} from "react";
import { getVideoGameByID } from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import Option from "../Option/Option";
import styles from "./GameDetails.module.css"
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";



export default function GameDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getVideoGameByID(id))
    },[]);

    const {videoGame} = useSelector((state) => state);
    console.log(videoGame.genres);
 return(videoGame.name?
    <div className={styles.main_container}>
        <NavBar/>
        <div className={styles.container}>
            <h1>{videoGame.name}</h1>
            <img className={styles.img} src={videoGame.image} alt="" />
            <div className={styles.info_container}>
                <div className={styles.second_info_container}>
                    <div className={styles.description_container}>
                        <div className={styles.description} dangerouslySetInnerHTML={{__html:videoGame.description}}/>
                        <p><span>Released date: </span>{videoGame.release_date}</p>
                        <p><span>Rating: </span>{videoGame.rating}</p>
                    </div>
                    <div>
                        <h2>Platforms</h2>
                        <div className={styles.platforms_container}>
                            {videoGame.platforms.map((p, i) => <Option className={styles.platform} key={i} platformOrGenre={p}/>)}
                        </div>
                    </div>
                    <div>
                        <h2>Genres</h2>
                        <div className={styles.genres_container}>
                            {videoGame.genres.map((g, i) => <Option key={i} platformOrGenre={g}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>:<Loading/>
 )
}