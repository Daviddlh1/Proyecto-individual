import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { filter, getGenres, getVideoGames, order, origin } from "../../redux/actions";
import styles from "./Filters.module.css"

export default function Filters() {
    const {genres} = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres());
    },[]);

    function orderHandler(e) {
        e.preventDefault()
        if(e.target.value === 'order') dispatch(getVideoGames());
        else dispatch(order(e.target.value));
    }

    function filterHandler(e) {
        e.preventDefault();
        if(e.target.value === 'genres') dispatch(getVideoGames())
        else dispatch(filter(e.target.value));
    }

    function originHandler(e) {
        e.preventDefault();
        if(e.target.value === 'origin') dispatch(getVideoGames());
        else dispatch(origin(e.target.value));
    }
    return (
        <div className={styles.container}>
            <select className={styles.select} onChange={orderHandler}>
                <option value="order">Order</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
                <option value="rating">Rating</option>
            </select>

            <select className={styles.select} onChange={filterHandler}>
                <option value="genres">Genres</option>
                {genres.map((g) => <option key={g.id} value={g.name}>{g.name}</option>)};
            </select>

            <select className={styles.select} onChange={originHandler}>
                <option value="origin">Source</option>
                <option value="api">API</option>
                <option value="db">Data Base</option>
            </select>
        </div>
    )
}
