import { MealContext } from "./MealContext";
import React, { useState, useContext } from "react";
import VanillaJS from "./VanillaJS.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Styled from "styled-components";
import { SearchResults } from "./SearchResults";

export const MealDetails = () => {
    const { individualMealDetails, setIndividualMealDetails } = useContext(MealContext);
    const youtubeEmbedLink = individualMealDetails.strYoutube.replace('watch?v=', 'embed/');
    console.log(youtubeEmbedLink);

    return (
        <div><h1>Meal Detail PAge</h1>
            <h1>{individualMealDetails.strMeal}</h1>
            <img src={individualMealDetails.strMealThumb} />
            <ul>
                <li>{individualMealDetails.strIngredient1}: {individualMealDetails.strMeasure1}</li>
                <li>{individualMealDetails.strIngredient2}: {individualMealDetails.strMeasure2}</li>
                <li>{individualMealDetails.strIngredient3}: {individualMealDetails.strMeasure3}</li>
                <li>{individualMealDetails.strIngredient4}: {individualMealDetails.strMeasure4}</li>
                <li>{individualMealDetails.strIngredient5}: {individualMealDetails.strMeasure5}</li>
                <li>{individualMealDetails.strIngredient6}: {individualMealDetails.strMeasure6}</li>
                <li>{individualMealDetails.strIngredient7}: {individualMealDetails.strMeasure7}</li>
                <li>{individualMealDetails.strIngredient8}: {individualMealDetails.strMeasure8}</li>
                <li>{individualMealDetails.strIngredient9}: {individualMealDetails.strMeasure9}</li>
                <li>{individualMealDetails.strIngredient10}: {individualMealDetails.strMeasure10}</li>
                <li>{individualMealDetails.strIngredient11}: {individualMealDetails.strMeasure11}</li>
                <li>{individualMealDetails.strIngredient12}: {individualMealDetails.strMeasure12}</li>
                <li>{individualMealDetails.strIngredient13}: {individualMealDetails.strMeasure13}</li>
                <li>{individualMealDetails.strIngredient14}: {individualMealDetails.strMeasure14}</li>
                <li>{individualMealDetails.strIngredient15}: {individualMealDetails.strMeasure15}</li>
                <li>{individualMealDetails.strIngredient16}: {individualMealDetails.strMeasure16}</li>
                <li>{individualMealDetails.strIngredient17}: {individualMealDetails.strMeasure17}</li>
                <li>{individualMealDetails.strIngredient18}: {individualMealDetails.strMeasure18}</li>
                <li>{individualMealDetails.strIngredient19}: {individualMealDetails.strMeasure19}</li>
                <li>{individualMealDetails.strIngredient20}: {individualMealDetails.strMeasure20}</li>
            </ul>
            <p>{individualMealDetails.strInstructions}</p>

            <iframe width="640" height="360" src={youtubeEmbedLink} title={individualMealDetails.strMeal} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}