import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'

export const RandomMeal = () => {
    const { randomMeal, setRandomMeal } = useContext(MealContext);
    console.log('random meal: ', randomMeal);

    // useEffect(() => {
    //     fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    //         .then(res => res.json())
    //         .then(data => {
    //             setRandomMeal(data.meals[0])
    //         })
    // }, [])

    // let youTubeLink = randomMeal.strYoutube;
    // console.log(youTubeLink);
    // if(youTubeLink !== undefined) {
    //     let youTubeId = youTubeLink.slice(youTubeLink.indexOf('=')+1);
    //     console.log('yt id:',youTubeId);
    // }


    return (
        <>
            <Link to={`/details/${randomMeal.id}`}>
                <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
                {/* <video width="640" height="480" src='https://www.youtube.com/watch?v=IqXEZUk4hWI' controls>XXDRVRV </video> */}
                <h1>{randomMeal.strMeal}</h1>
            </Link>



            {/* AN EXAMPLE OF AN IFRAME FROM YOUTUBE */}
            {/* <iframe width="480" height="360" src={`https://www.youtube.com/embed/IqXEZUk4hWI`} title="Moroccan Almond Cookies - Ghriyba" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

            {/* IAN'S ATTEMPTS TO EMBED VIDEOS FOR EACH MEAL */}
            {/* <iframe width="640" height="360" src={`https://www.youtube.com/embed/${randomMeal.strYoutube.slice(randomMeal.strYoutube.indexOf('=')+1)}`} title="Homemade Clam Chowder Recipe - Laura Vitale - Laura in the Kitchen Episode 413" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </>

    )
}