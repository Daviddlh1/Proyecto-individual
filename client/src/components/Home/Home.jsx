import React, {useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideoGames } from "../../redux/actions";
import GamesContainer from "../GamesContainer/GamesContainer"
import Pagination from "../Pagination/Pagination";
import NavBar from "../NavBar/NavBar"



export default function Home() {
    const {displayableGames} = useSelector(state => state); 
    const dispatch = useDispatch();
    let [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 12;

    function pages(pageNum){
        setCurrentPage(pageNum);
    }

    useEffect(()=>{
        dispatch(getVideoGames());
    });

    let indexOfLastGame = currentPage * gamesPerPage;
    let indexOfFirstGame = indexOfLastGame -gamesPerPage;
    let currentGames = displayableGames.slice(indexOfFirstGame, indexOfLastGame);

    return (
        <div>
            <NavBar/>
            <GamesContainer currentGames = {currentGames}/>
            {<Pagination gamesPerPage = {gamesPerPage} totalAmount = {displayableGames.length} pages = {pages} />}
        </div>
    )
}