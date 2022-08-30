import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'

import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'
import { RandomMeal } from './RandomMeal';
import styled from 'styled-components';
import { useParams } from "react-router";

const StyledCard = styled.div`
display: flex;
flex-direction: column;
mid-width: 1496px;

align-items: center;
background-color: #f5f5f5;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
pad
`



export const SearchResults = () => {
    const { mealArray, setMealArray, individualMealDetails, setIndividualMealDetails, mealSearchText } = useContext(MealContext);
    const navigate = useNavigate();
    const { query } = useParams();
    const [ingredientsArray, setIngredientsArray] = useState([])

    // fetches per a search for meal name
    useEffect(() => {
        // console.log("search useEffect did run")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(res => res.json())
            .then(data => {
                // console.log('meal search:', data)
                if(data.meals.length !== 1){
                    data.meals ? setMealArray(data.meals) : navigate('/error'); 
                }
                else{
                    navigate(`/details/${data.meals[0].idMeal}`)
                }
                          
            })
    }, [mealSearchText])

    useEffect(() => {
        setIngredientsArray([]);
        for(let i = 1; i <= 20; i++){
            if(individualMealDetails[`strIngredient${i}`]){
                const ingredients = individualMealDetails[`strIngredient${i}`]
                console.log("ingredients - searchResults: ", ingredients);
                const measurements = individualMealDetails[`strMeasure${i}`];
                const tempArray = ingredientsArray;
                tempArray.push(`${ingredients} : ${measurements}`)
                setIngredientsArray(tempArray);
                //code below doesn't work for some reason
                // setIngredientsArray(...ingredientsArray, `${ingredients} : ${measurements}`)
            }
        }
    }, [individualMealDetails])
    

    return (
        <>
            <div>SearchResult!</div>
            <>
                {mealArray.map(meal => {
                    return (
                        <div onClick={() => {
                            // setIndividualMealDetails(meal);
                            navigate(`/details/${meal.idMeal}`)
                        }
                        }>

                            <div>{meal.strMeal}</div>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <ul>
                            {setIndividualMealDetails(meal)}    
                            {ingredientsArray.map((ingredient) => 
                                <li>{ingredient}</li>
                             )}
                                {/* FROM IAN: WE'LL NEED TO FIGURE OUT A WAY TO HANDLE EMPTY STRINGS AND NULL VALUES HERE, BUT THE BASIC FUNCTIONALITY IS THERE */}
                                {/* <li>{meal.strIngredient1}: {meal.strMeasure1}</li>
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
                                <li>{meal.strIngredient20}: {meal.strMeasure20}</li> */}
                            </ul>
                        </div>
                    )
                })}
            </>
        </>
    )
}