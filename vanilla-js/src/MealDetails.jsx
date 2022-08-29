import { MealContext } from "./MealContext";
import React, { useState, useContext, useEffect } from "react";
import VanillaJS from "./VanillaJS.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Styled from "styled-components";
import { SearchResults } from "./SearchResults";
import { useParams } from "react-router";

export const MealDetails = () => {
    // const { individualMealDetails, setIndividualMealDetails } = useContext(MealContext);

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
        setIngredientsArray([]);
        for(let i = 1; i <= 20; i++){
            if(currentMeal[`strIngredient${i}`]){
                const ingredients = currentMeal[`strIngredient${i}`]
                console.log("ingredients", ingredients);
                const measurements = currentMeal[`strMeasure${i}`];
                const tempArray = ingredientsArray;
                tempArray.push(`${ingredients} : ${measurements}`)
                setIngredientsArray(tempArray);
                // setIngredientsArray(...ingredientsArray, `${ingredients} : ${measurements}`)
            }
        }
    }, [currentMeal])

    // useEffect(() => {
    //     console.log("ingredientsArray", ingredientsArray);
    // }, [ingredientsArray])
    
                //   exampleArr.map(item => <li>{item}</ll>)
                //     for(let i = 1; i <= 20; i++ ){
                //       return (
                //           //exampleArr.push(`${currentMeal.strIngredient1} : ${currentMeal.strMeasurment1}`)
                //           <li>{`currentMeal.strIngredient${i}`}: {`currentMeal.strMeasure${i}`}</li>
                //       )
                //   }

              
    
    // if (strValue === "")

    return (
        <div><h1>Meal Detail Page</h1>
            <h1>{currentMeal.strMeal}</h1>
            <h3>{currentMeal.strCategory}</h3>
            <img src={currentMeal.strMealThumb} />
            <ul>
                {ingredientsArray.map((ingredient) => 
                    <li>{ingredient}</li>
                )}
                
                    
                
                {/* <li>{currentMeal.strIngredient1}: {currentMeal.strMeasure1}</li>
                <li>{currentMeal.strIngredient2}: {currentMeal.strMeasure2}</li>
                <li>{currentMeal.strIngredient3}: {currentMeal.strMeasure3}</li>
                <li>{currentMeal.strIngredient4}: {currentMeal.strMeasure4}</li>
                <li>{currentMeal.strIngredient5}: {currentMeal.strMeasure5}</li>
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
            </ul>
            <p>{currentMeal.strInstructions}</p>

            <iframe width="640" height="360" src={youtubeEmbedLink} title={currentMeal.strMeal} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

{/* FROM IAN: TRYING TO IMPLEMENT A SIMPLE UNIT CONVERTER. THIS IS DEFINITELY A STRETCH GOAL */}

            {/* https://www.theunitconverter.com/unit-conversion-widget.html#:~:text=Entry%20the%20required%20value%2C%20it%20will%20get%20the,into%20the%20desired%20position%20in%20your%20websites%20code. */}

            {/* <!-- Unit Conversion Script - TheUnitConverter.com /--> */}
            
            {/* <div style="width:238px;margin:0px auto;"><div style="width:99.5%;border:1px solid #2D6AB4;border-top:none;border-bottom:none;text-align:center; height:35px;font-size:16px;padding:5px 0px 0px 0px;border-top-right-radius:5px; border-top-left-radius:5px;background-color:#2D6AB4; font-weight:bold;"><a href="https://www.theunitconverter.com/volume-conversion/" style="text-decoration:none;color:#FFFFFF;" rel="nofollow">Conversion Widget</a></div><script type="text/javascript" src="https://ww.theunitconverter.com/converter.php?l=en&c=0&a=FFFFFF&b=2D6AB4&s=volume"></script></div> */}
            
            {/* <!-- End of Unit Conversion Script --> */}
