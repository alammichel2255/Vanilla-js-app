import { MealContext } from "./MealContext";
import React, { useState, useContext, useEffect } from "react";
import VanillaJS from "./VanillaJS.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { SearchResults } from "./SearchResults";
import { useParams } from "react-router";
import Rogo from "./chef.png";
import { Widget } from "./WidgetComponents/Widget";

const StyledCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #f5f5f5;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 2px 0;
padding: 2px;
`
const StyledDetailFooter = styled.div`
width:90%;
mid-width: 1496px;
max-width: 1460px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #f5f5f5;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
padding: 60px;
height:350px;
`
const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  
  `
const StyledDetailVideo = styled.div`
width:90%;
mid-width: 1496px;
max-width: 1460px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: #f5f5f5;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
padding: 60px;
`
const Image = styled.img`
width: 300px;
margin-left: 0px;
border: 10px solid black;
&:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale (0.98);
`
const Logo = styled.img`
width: 200px;

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
margin-bottom: 10px;
&:hover {
  opacity: 0.8;
  transform: scale (0.98);
  font-type: poppins;
  
`
const Flex = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;

color: black;
& > div,
& >ul {
  flex: 1;
}`

const NoMarginH1 = styled.h1`
margin: 0px;
font-size: 40px;
`

const NoMarginH3 = styled.h3`
margin: 0px;
font-size: 25px;
`
const CardRight = styled.div`
flex-direction: column;
align-items: center;
`



export const MealDetails = () => {
    const { tempFavArray, setTempFavArray } = useContext(MealContext);

    const [currentMeal, setCurrentMeal] = useState({});
    const [youtubeEmbedLink, setYoutubeEmbedLink] = useState('')
    const [ingredientsArray, setIngredientsArray] = useState([])
    
    const { id } = useParams();
    // const youtubeEmbedLink = currentMeal.strYoutube.replace('watch?v=', 'embed/');
    // console.log(youtubeEmbedLink);

    useEffect(() => {
       fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
       .then(res => res.json())
       .then(data => {
        setCurrentMeal(data.meals[0])
        setYoutubeEmbedLink(data.meals[0].strYoutube.replace('watch?v=', 'embed/'))
    })
    }, [])

    useEffect(() => {
        // setIngredientsArray([]);
        const tempArray = [];
        for(let i = 1; i <= 20; i++){
            if(currentMeal[`strIngredient${i}`]){
                const ingredients = currentMeal[`strIngredient${i}`]
                // console.log("ingredients", ingredients);
                const measurements = currentMeal[`strMeasure${i}`];
                // const tempArray = ingredientsArray;
                tempArray.push(`${ingredients} : ${measurements}`)
                setIngredientsArray(tempArray);
                //code below doesn't work for some reason
                // setIngredientsArray(...ingredientsArray, `${ingredients} : ${measurements}`)
            }
        }
    }, [currentMeal])

    useEffect(() => {
        console.log("curr ingredients array: ", ingredientsArray);
    }, [ingredientsArray])


    return (
        <>
        <Container>
    <StyledCard>
        <div>
            {/* <h1>Meal Detail Page</h1> */}
            <NoMarginH1
            >{currentMeal.strMeal}</NoMarginH1>
            <NoMarginH3>Category: {currentMeal.strCategory}</NoMarginH3>
            <NoMarginH3>Area: {currentMeal.strArea}</NoMarginH3>

            <Flex>
            <Button onClick={() => {
                let contains = 0;
                for(let i of tempFavArray){
                    if(i.strMeal === currentMeal.strMeal){
                        contains = 1
                    }
                }
                if(!contains){
                    setTempFavArray(current => [...current, currentMeal])
                }
                }}>Add to Favorites</Button> 
            </Flex>

        </div>
        </StyledCard>
        </Container>
        <Container>
        <StyledDetailFooter>
                <div>
                   <Image src={currentMeal.strMealThumb} alt= {currentMeal}/>
               </div>
            <ul >
                {ingredientsArray.map((ingredient) => 
                    <h5 style={{fontSize:'8.5px'}}>{ingredient}</h5>
                )}
            </ul>

            <Logo src= {Rogo}/>
            <Widget/>


            </StyledDetailFooter>
            <StyledDetailVideo>
            <p>{currentMeal.strInstructions}</p>

            <iframe width="640" height="360" src={youtubeEmbedLink} title={currentMeal.strMeal} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </StyledDetailVideo>
        </Container>
        </>
    )
}








               {/* <li>{currentMeal.strIngredient1}: {currentMeal.strMeasure1}</li>
                <li>{currentMeal.strIngredient2}: {currentMeal.strMeasure2}</li>
                <li>{currentMeal.strIngredient3}: {currentMeal.strMeasure3}</li>
                <li>{currentMeal.strIngredient4}: {currentMeal.strMeasure4}</li>
                <li>{currentMeal.strIngredient5}: {currentMeal.strMeasure5}</li>
                <CardRight>
                
                </CardRight>
                <li>{currentMeal.strIngredient6}: {currentMeal.strMeasure6}</li>
                <li>{currentMeal.strIngredient7}: {currentMeal.strMeasure7}</li>
                <li>{currentMeal.strIngredient8}: {currentMeal.strMeasure8}</li>
                <li>{currentMeal.strIngredient9}: {currentMeal.strMeasure9}</li>
                <li>{currentMeal.strIngredient10}: {currentMeal.strMeasure10}</li>
                <li>{currentMeal.strIngredient11}: {currentMeal.strMeasure11}</li>
                <li>{currentMeal.strIngredient12}: {currentMeal.strMeasure12}</li>
                <li>{currentMeal.strIngredient13}: {currentMeal.strMeasure13}</li>
                <li>{currentMeal.strIngredient14}: {currentMeal.strMeasure14}</li>
                <li>{currentMeal.strIngredient15}: {currentMeal.strMeasure15}</li>
                <li>{currentMeal.strIngredient16}: {currentMeal.strMeasure16}</li>
                <li>{currentMeal.strIngredient17}: {currentMeal.strMeasure17}</li>
                <li>{currentMeal.strIngredient18}: {currentMeal.strMeasure18}</li>
                <li>{currentMeal.strIngredient19}: {currentMeal.strMeasure19}</li>
                <li>{currentMeal.strIngredient20}: {currentMeal.strMeasure20}</li> */}