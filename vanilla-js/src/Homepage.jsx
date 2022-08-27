import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { RandomMeal } from './RandomMeal';

export const Homepage = () => {

    const {randomMeal, setRandomMeal} = useContext(MealContext);

    return (
        <>
            <RandomMeal />
            <h1>Homepage</h1>
        </>
    )
}