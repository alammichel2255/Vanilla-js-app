import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'
import { RandomMeal } from './RandomMeal';
import styled from 'styled-components';

const MealDiv = styled.div`
    background-color: green;
`

export const SearchResults = () => {
    const { mealArray, setMealArray, indivualMealDetails, setIndividualMealDetails} = useContext(MealContext);
    return (
        <>
            <div>SearchResult!</div>
            <>
                {mealArray.meals.map(meal => {
                    return (
                        <div onClick={() => {
                            setIndividualMealDetails(meal)
                            console.log(meal)}
                            }>
                            <div>{meal.strMeal}</div>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <ul>
                                {/* FROM IAN: WE'LL NEED TO FIGURE OUT A WAY TO HANDLE EMPTY STRINGS AND NULL VALUES HERE, BUT THE BASIC FUNCTIONALITY IS THERE */}
                                <li>{meal.strIngredient1}: {meal.strMeasure1}</li>
                                <li>{meal.strIngredient2}: {meal.strMeasure2}</li>
                                <li>{meal.strIngredient3}: {meal.strMeasure3}</li>
                                <li>{meal.strIngredient4}: {meal.strMeasure4}</li>
                                <li>{meal.strIngredient5}: {meal.strMeasure5}</li>
                                <li>{meal.strIngredient6}: {meal.strMeasure6}</li>
                                <li>{meal.strIngredient7}: {meal.strMeasure7}</li>
                                <li>{meal.strIngredient8}: {meal.strMeasure8}</li>
                                <li>{meal.strIngredient9}: {meal.strMeasure9}</li>
                                <li>{meal.strIngredient10}: {meal.strMeasure10}</li>
                                <li>{meal.strIngredient11}: {meal.strMeasure11}</li>
                                <li>{meal.strIngredient12}: {meal.strMeasure12}</li>
                                <li>{meal.strIngredient13}: {meal.strMeasure13}</li>
                                <li>{meal.strIngredient14}: {meal.strMeasure14}</li>
                                <li>{meal.strIngredient15}: {meal.strMeasure15}</li>
                                <li>{meal.strIngredient16}: {meal.strMeasure16}</li>
                                <li>{meal.strIngredient17}: {meal.strMeasure17}</li>
                                <li>{meal.strIngredient18}: {meal.strMeasure18}</li>
                                <li>{meal.strIngredient19}: {meal.strMeasure19}</li>
                                <li>{meal.strIngredient20}: {meal.strMeasure20}</li>
                            </ul>
                        </div>
                    )
                })}
            </>
        </>
    )
}