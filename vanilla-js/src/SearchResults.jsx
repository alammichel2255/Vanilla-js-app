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
flex-direction: row;
width: 750px;
flex-wrap: wrap;
justify-content: center;
background-color: #f5f5f5;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
pad
&:hover {
    opacity: 2.5;
    transform: scale (2.98);
`
const StyledCardInfo = styled.div`
display: flex;
flex-direction: column;
mid-width: 1496px;
justify-content: space-evenly;
align-items: center;
background-color: #f5f5f5;
border-radius: 15px;

box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 5px 0;


`
const Flex = styled.div`
display: flex;
flex-wrap: wrap;
padding-top: 0px;
gap: 20px 20px;
padding-bottom: 15px;
align-items: center;
text-align: center;
justify-content: space-between;
color: black;
& > div,
& >ul {
  flex: 1;
}`

const Container = styled.div`
width: 1000px;
max-width: 100%;
padding: 0 1px;
margin: 0 auto;


`
const Image = styled.img`
width: 200px;
height: 200px;
border: 10px solid black;
&:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale (0.98);
`
const Button = styled.button`
border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px
font-weight: 700;
padding: 10px 20px;
background-color: black;
color: white;
&:hover {
  opacity: 0.8;
  transform: scale (0.98);
  font-type: poppins;
  
`



export const SearchResults = () => {
    const { mealArray, setMealArray, individualMealDetails, setIndividualMealDetails, mealSearchText, catMealArray, setCatMealArray } = useContext(MealContext);
    const navigate = useNavigate();
    const { query } = useParams();
    const { tempFavArray, setTempFavArray } = useContext(MealContext);
    const { tempLocal, setTempLocal } = useContext(MealContext);
    // const [ingredientsArray, setIngredientsArray] = useState([])

    // fetches per a search for meal name
    useEffect(() => {
        
       let url = ''
       console.log('query 0', query[0], 'query 1', query[1])
        if(query[0]==="c" || query[0] === "a"){
            // let newQuery = query.slice(1);

            url = `https://www.themealdb.com/api/json/v1/1/filter.php?${query[0]}=${query.slice(2)}`
        }
        else if(query[0]==="s"){
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.slice(2)}`
        }
        else if(query[0]==="r"){
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
            console.log("query r ran")
        }else{
            navigate('/error') 
        }
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log('meal search:', data)
                console.log("url ", url)
                data.meals ? (
                    data.meals.length !== 1 ? (
                    setMealArray(data.meals) 
                    ):(
                        navigate(`/details/${data.meals[0].idMeal}`)
                    )
                    ): navigate('/error'); 
            })
    }, [mealSearchText])

    return (
        <>
        <h3>Results: {mealArray.length}</h3>
        <Container>
            <Flex>
        
            
            <>
                {mealArray.map(meal => {
                    return (
                        <>
                        <StyledCardInfo>
                            <div onClick={() => {
                            navigate(`/details/${meal.idMeal}`)
                            }}>  
                            <h6 style={{fontSize:'15px'}}>{meal.strMeal}</h6>
                            <Image src={meal.strMealThumb} alt={meal.strMeal} style={{width: '200px', height:'200px'}} />
                            </div>
                            <Button onClick={() => {
                            let contains = 0;
                            for(let i of tempFavArray){
                                if(i.strMeal === meal.strMeal){
                                    contains = 1
                                }
                            }
                            if(!contains){
                                setTempFavArray(current => [...current, meal])
                            }
                            }}>Add to Favorites</Button>
                        </StyledCardInfo>

                        </>
                    )
                })}
            </>
            
        
        </Flex>
        </Container>
        </>
    )
}

    // useEffect(() =>{
    //     console.log('app catmealarray: ', catMealArray)
    //     // setMealArray(catMealArray)
    // }, [catMealArray])

    // useEffect(() => {
    //     setIngredientsArray([]);
    //     for(let i = 1; i <= 20; i++){
    //         if(individualMealDetails[`strIngredient${i}`]){
    //             const ingredients = individualMealDetails[`strIngredient${i}`]
    //             console.log("ingredients - searchResults: ", ingredients);
    //             const measurements = individualMealDetails[`strMeasure${i}`];
    //             const tempArray = ingredientsArray;
    //             tempArray.push(`${ingredients} : ${measurements}`)
    //             setIngredientsArray(tempArray);
    //             //code below doesn't work for some reason
    //             // setIngredientsArray(...ingredientsArray, `${ingredients} : ${measurements}`)
    //         }
    //     }
    // }, [individualMealDetails])

                            {/* <ul>
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
                            {/* </ul> */}