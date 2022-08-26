import { MealContext } from "./MealContext";
import React, {useState, useContext } from "react";
import VanillaJS from "./VanillaJS.png";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


export const Header = () => {
// const {mealSearchText, setMealSearchText} = useContext(MealContext);
const [searchText, setSearchText] = useState('');


const handleSubmit = (e) => {
    e.preventDefault();
    // setMealSearchText(searchText);
}
return (
<div className="header">
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Meals" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <input type="submit" />
    </form>
        <div>
            <Link id='homepage' to="/">
            <img src= { VanillaJS } alt="VanillaJS" width="100px" />
            </Link>
        </div>
</div>
)
}
