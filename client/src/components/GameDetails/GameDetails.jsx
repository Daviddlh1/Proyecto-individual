import React, {useEffect} from "react";
import { getVideoGameByID } from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import Option from "../Option/Option";
import styles from "./GameDetails.module.css"



export default function GameDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getVideoGameByID(id))
    },[]);

    const {videoGame, platforms, genres} = useSelector((state) => state);

 return(
    <div>
        <img className={styles.img} src={videoGame.image} alt="" />
        <div>
            <div>
                <p>{videoGame.name}</p>
                {videoGame.description}
                <p>{videoGame.release_date}</p>
                <p>{videoGame.rating}</p>
                <div>
                    <h2>Platforms</h2>
                    {platforms.map((p, i) => <Option key={i} platformOrGenre={p}/>)}
                </div>
                <div>
                    genres
                </div>
            </div>
        </div>
    </div>
 )
}