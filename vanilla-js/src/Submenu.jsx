import { MealContext } from "./MealContext";
import React, { useState, useContext, useEffect } from "react";
import VanillaJS from "./VanillaJS.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { SearchResults } from "./SearchResults";
import { ErrorLanding } from "./ErrorLanding";
import { Dropdown } from "./Dropdown"

export const Submenu = ({ sub }) => {
    const [tempMealCatArr, setTempMealCatArr] = useState([]);
    const navigate = useNavigate();
        const { mealArray, setMealArray, individualMealDetails, setIndividualMealDetails, mealSearchText, catMealArray, setCatMealArray } = useContext(MealContext);

    const handleClick = (item) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`)
            .then(res => res.json())
            .then(data => setTempMealCatArr(data.meals))
    }

    useEffect(() => {
        const categoryMealPromises = tempMealCatArr.map(catMeal =>
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${catMeal.idMeal}`)
                .then(res => res.json())
                .then(data => data.meals))
        Promise.all(categoryMealPromises)
            .then(data => console.log('meal promises:', data))
    }, [tempMealCatArr])

    return (
        // <li>thing</li>
        <ul>
            {sub.map(item => {
                return (
                    <div onClick={() => { 
                        handleClick(item);
                        navigate(`/searchResults/${item}`)
                    }}>{item}</div>

                )
            })}

        </ul>
        // {submenu.map(item => {
        //     return(
        //         <li>{item}</li>
        //     )

        // })

        // }

    )
}