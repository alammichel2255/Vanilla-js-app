import { RandomMeal } from "./RandomMeal"
import { MealContext } from "./MealContext";
import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom'
import Styled from 'styled-components'

export const ErrorLanding = () => {
    const { randomMeal, setRandomMeal } = useContext(MealContext);
    return (
        <>
            <h1>Sorry we couldn't find the meal you were looking for...</h1>
            <p>Have you considered giving our meal of the day a try?</p>
            <button onClick={() => fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                .then(res => res.json())
                .then(data => {
                    setRandomMeal(data.meals[0])
                })}>Or perhaps a different meal?</button>
            <RandomMeal />
            <div>


            </div>
        </>
    )
}

