import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'


const StyledCard = styled.div`
display: flex;
width: 100vh;
justify-content: center;
background-color: #fffff0;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
padding: 60px
cursor: pointer;

img{
width: 600px;
border: 10px solid black;

}
`
const Container = styled.div`
width: 1000px;
max-width: 100%;
padding: 0 10px;
margin: 0 auto;
`
const Flex = styled.div`
display: flex;
align-items: center;
text-align: center;

& > div,
& >ul {
  flex: 1;
}`
export const RandomMeal = () => {
    const { randomMeal, setRandomMeal, individualMealDetails, setIndividualMealDetails } = useContext(MealContext);
    console.log('random meal: ', randomMeal);
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    //         .then(res => res.json())
    //         .then(data => {
    //             setRandomMeal(data.meals[0])
    //         })
    // }, [])

    // let youTubeLink = randomMeal.strYoutube;
    // console.log(youTubeLink);
    // if(youTubeLink !== undefined) {
    //     let youTubeId = youTubeLink.slice(youTubeLink.indexOf('=')+1);
    //     console.log('yt id:',youTubeId);
    // }


    return (
        <Container>
            <Flex>
        <StyledCard onClick={() => {
                setIndividualMealDetails(randomMeal);
                navigate(`/details/${randomMeal.idMeal}`)}
            }>
                <h2>{randomMeal.strMeal}</h2>
                <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
        </StyledCard>
            </Flex>
            </Container>

)
}
{/* <Link to={`/details/${randomMeal.id}`}> */}
{/* <video width="640" height="480" src='https://www.youtube.com/watch?v=IqXEZUk4hWI' controls>XXDRVRV </video> */}