import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { RandomMeal } from './RandomMeal';

export const Favorites = () => {
    const { tempFavArray, setTempFavArray } = useContext(MealContext);
    
    useEffect(() => {
        console.log("Temp Fav Array", tempFavArray);
        let tempArray = []
        tempArray.push(localStorage.getItem('favArray'))
        tempArray.push(tempFavArray)
        localStorage.setItem("favArray", tempArray);

    }, [tempFavArray])


    return (

        <div>
            <button onClick={() => {
            const local = localStorage.getItem('favArray');
            console.log(local);
            }}>console log fav array local storage</button>
            <button onClick={() => {
            const local = localStorage.getItem('favArray');
            console.log("initial values: local: ", local, "tempfavarray: ", tempFavArray);
            localStorage.clear();
            setTempFavArray([]);
            console.log("local storage cleared");
            }}>Clear local storage</button>
                
        <h1>FAVORITES</h1>
            
        </div>

    )
}