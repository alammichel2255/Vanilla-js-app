import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { RandomMeal } from './RandomMeal';

const Container = styled.header`
  width: 1000px;
  max-width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  align-items: center;
  `



export const Homepage = () => {

    const {randomMeal, setRandomMeal} = useContext(MealContext);

    return (
        <Container>
            
         <RandomMeal />
            
        </Container>
    )
}