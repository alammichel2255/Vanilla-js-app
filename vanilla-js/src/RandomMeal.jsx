import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'

export const RandomMeal = () => {
    const {randomMeal, setRandomMeal} = useContext(MealContext);

    // useEffect(() =>{
    //   // const {randomMeal, setRandomMeal} = useContext(MealContext);

    //     fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    //     .then(res => res.json())
    //     .then(data => {
    //     //   data.meals[0] 
    //       setRandomMeal(data.meals[0])
    //       console.log(randomMeal)
    //       console.log(data.meals[0])
    //     })
    //     // .then(data => console.log('random meal', randomMeal))
    //   },[])

    return(
        <div>Random meal</div>
    )
}