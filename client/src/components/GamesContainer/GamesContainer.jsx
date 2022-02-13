import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import GamesCard from "../GamesCard/GamesCard";
import Loading from "../Loading/Loading";
import { getPlatforms, getVideoGames } from "../../redux/actions";
import styles from "./GamesContainer.module.css"



export default function VideoGameContainer() {
    const {displayableGames} = useSelector((state)=> state);
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getVideoGames())
        dispatch(getPlatforms());
    },[])

    return displayableGames.length? (
        <div className={styles.container}>
            {displayableGames.map(v=> 
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