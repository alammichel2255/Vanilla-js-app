import { MealContext } from "./MealContext";
import React, { useState, useContext } from "react";
import VanillaJS from "./VanillaJS.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import  Styled from "styled-components";




export const Header = () => {
    // const {mealSearchText, setMealSearchText} = useContext(MealContext);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // setMealSearchText(searchText);
    }
    return (
        <div className="header">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search Meals" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <input type="submit" />
            </form>
            <div>
                {/* <Link id='homepage' to="/"> */}
                    <img src={VanillaJS} alt="VanillaJS" width="100px" onClick={() => navigate('/')}/>
                {/* </Link> */}
            </div>
        </div>
    )
}
