import { MealContext } from "./MealContext";
import React, { useState, useContext, useEffect } from "react";
import VanillaJS from "./VanillaJS.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import  Styled from "styled-components";
import { SearchResults } from "./SearchResults";
import { ErrorLanding } from "./ErrorLanding";




export const Header = () => {

    const {mealSearchText, setMealSearchText, mealArray, setMealArray} = useContext(MealContext);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

      // fetches per a search for meal name
  useEffect(()=> {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearchText}`)
    .then(res => res.json())
    .then(data => {
      data.meals ? setMealArray(data) : navigate('/error');

      console.log('meal search:', data)
    })
  }, [mealSearchText])




    const handleSubmit = (e) => {
        e.preventDefault();
        setMealSearchText(searchText);
        navigate('/searchResults');
    }
    return (
        <div className="header">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search Meals" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <input type="submit" />
            </form>
            <div>
                    <img src={VanillaJS} alt="VanillaJS" width="100px" onClick={() => navigate('/')}/>

            </div>
        </div>
    )
}
