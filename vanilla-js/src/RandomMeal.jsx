import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'

export const RandomMeal = () => {
    const { randomMeal, setRandomMeal, individualMealDetails, setIndividualMealDetails } = useContext(MealContext);
    console.log('random meal: ', randomMeal);
    const navigate = useNavigate();

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
            {/* <Link to={`/details/${randomMeal.id}`}> */}
            <div style={{cursor: 'pointer'}} onClick={() => {
                setIndividualMealDetails(randomMeal);
                navigate(`/details/${randomMeal.idMeal}`)}
            }>
                <h1>{randomMeal.strMeal}</h1>
                <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} style={{paddingLeft:'center', width: '520px', paddingLeft:'43%', paddingTop:'18%'}} />
                {/* <video width="640" height="480" src='https://www.youtube.com/watch?v=IqXEZUk4hWI' controls>XXDRVRV </video> */}
            </div>

        </>

    )
}