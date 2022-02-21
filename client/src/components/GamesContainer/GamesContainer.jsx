import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import GamesCard from "../GamesCard/GamesCard";
import Loading from "../Loading/Loading";
import { getPlatforms, getVideoGames } from "../../redux/actions";
import styles from "./GamesContainer.module.css"



export default function VideoGameContainer({currentGames}) {

    return currentGames.length? (
        <div className={styles.container}>
            {currentGames.map(v=> 
            <GamesCard 
            key={v.id}
            id={v.id} 
            name={v.name} 
            image={v.image} 
            genres={v.genres} />
            )}  
        </div>
    ):<Loading/>
}