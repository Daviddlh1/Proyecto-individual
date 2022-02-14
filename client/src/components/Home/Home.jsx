import React from "react";
import GamesContainer from "../GamesContainer/GamesContainer"
import Pagination from "../Pagination/Pagination";
import NavBar from "../NavBar/NavBar"



export default function Home() {
    return (
        <div>
            <NavBar/>
            <GamesContainer/>
            <Pagination/>
        </div>
    )
}