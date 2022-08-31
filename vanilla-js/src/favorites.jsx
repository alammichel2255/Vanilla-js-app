import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { RandomMeal } from './RandomMeal';



const Image = styled.img`
width: 200px;
height: 200px;
border: 10px solid black;
&:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale (0.98);
`
const StyledCardInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #f5f5f5;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 10px 0;
height: 500px;
width: 700px;



`
const Flex = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding-top: 0px;
gap: 10px 10px;
padding-bottom: 0px;
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


export const Favorites = () => {
    const navigate = useNavigate();
    const { tempFavArray, setTempFavArray } = useContext(MealContext);
    const { tempLocal, setTempLocal } = useContext(MealContext);
    // const { displayArray, setDisplayArray } = useState([]);
    // setDisplayArray(localStorage.getItem('favArray'));

    useEffect(() => {
        console.log("Temp Fav Array", tempFavArray);
        let tempArray = []
        const local = localStorage.getItem('favArray');

                tempArray.push(local)
                tempArray.push(tempFavArray)
                localStorage.setItem("favArray", tempArray);

        // setDisplayArray(local);

    }, [tempFavArray])

//   useEffect(() => {
//     setTempLocal(localStorage.getItem('favArray'))
// }, [tempFavArray])

        // useEffect(() => {
        //     const local = localStorage.getItem('favArray');
        //     setDisplayArray(local);
        // }, [tempFavArray])


    return (

        <Container>
            
            <button onClick={() => {
            const local = localStorage.getItem('favArray');
            console.log(local);
            }}>console log fav array local storage</button>
            <button onClick={() => {
            const local = localStorage.getItem('favArray');
            console.log("initial values: local: ", local, "tempfavarray: ", tempFavArray);
            localStorage.clear();
            setTempFavArray([]);
            console.log("local storage cleared");
            }}>Clear local storage</button>
                
        <h1>FAVORITES</h1>
            
        
        <h3>Results: {tempFavArray.length}</h3>
        
            
            <Flex>
                {tempFavArray.map(meal => {
                    return (
                        <StyledCardInfo onClick={() => {
                            navigate(`/details/${meal.idMeal}`)
                        }
                        }>
                              
                            <h6 style={{fontSize:'20px'}}>{meal.strMeal}</h6>
                            <Image src={meal.strMealThumb} alt={meal.strMeal}  />
                            
                        </StyledCardInfo>
                    )
                })}
            
        
        </Flex>




        </Container>

    )
}