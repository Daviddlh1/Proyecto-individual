import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getGenres, getPlatforms, postVideoGame } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import styles from "./CreateGame.module.css"


export default function CreateGame() {
    const {genres, platforms} = useSelector((state) => state);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [game, setGame] = useState({
        name: '',
        release_date: '',
        image: '',
        description: '',
        rating: '',
        platforms: [],
        genres: [],
    });
    
    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms())
    },[]);

    function validator(input) {
        const errors = {};
        if(!input.name){
            errors.name = 'This field is required';
        }

        if(!input.release_date){
            errors.release_date = 'This field is required';
        }

        if(!input.image){
            errors.image = 'This field is required';
        }

        if(!input.rating){
            errors.rating = 'This field is required';
        }else if(!/^[1-9]\d*$/.test(input.rating)) {
            errors.rating = 'Needs to be an number';
        }

        if(input.platforms.length === 0){
            errors.platforms = 'The game should be in at least one platform'
        }

        if(input.genres.length === 0){
            errors.genres = 'The game Should have at least one genre'
        }
        console.log(errors)
        return errors;
    }
    
    function onChangeHandler(e) {
        e.preventDefault()
        setGame({
            ...game,
            [e.target.name]: e.target.name === 'genres'? 
            [...game.genres, e.target.value]
            : e.target.name === 'platforms'?
            [...game.platforms, e.target.value]
            :e.target.value
        });
        setErrors(validator({
            ...game,
            [e.target.name]: e.target.value
        }))
        console.log(errors);
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        if(errors.name || errors.release_date ||errors.iamge || errors.description || errors.rating || errors.platforms || errors.genres){
            alert('Cannot create the Game due to the following errors', errors);
        }else{
            dispatch(postVideoGame(game))
        }
        console.log(game)
    }

    return (
        <div className={styles.container}>
            <NavBar/>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <div className={styles.input_container} >
                    <label className={styles.label} htmlFor="">Name</label>
                    <div>
                        <input className={styles.input} type="text" name="name" placeholder="name" onChange={onChangeHandler} />
                    </div>
                </div>
                
                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="">Release Date</label>
                    <div>
                        <input className={styles.input} type="date" name="release_date" onChange={onChangeHandler} />
                    </div>
                </div>

                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="">Image</label>
                    <div>
                        <input className={styles.input} type="file" name="image" onChange={onChangeHandler} />
                    </div>
                </div>

                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="">Description</label>
                    <div>
                        <input className={styles.description} type="text" name="description" onChange={onChangeHandler} />
                    </div>
                </div>

                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="">Rating</label>
                    <div>
                        <input className={styles.input} type="text" name="rating" onChange={onChangeHandler} />
                    </div>
                </div>

                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="">Platforms</label>
                    <select className={styles.select} name="platforms" onChange={onChangeHandler}>
                        <option value="platforms">Platforms</option>
                        {platforms.map((p, i) => <option key={i} value={p}>{p}</option>)}
                    </select>
                </div>

                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="">Genres</label>
                    <div>
                        <select className={styles.select} name="genres" onChange={onChangeHandler}>
                            {genres.map(g => <option key={g.id} value={g.name}>{g.name}</option>)}
                        </select>
                    </div>
                </div>
                <input className={styles.submit} type="submit"/>
            </form>
        </div>
        
    )
}