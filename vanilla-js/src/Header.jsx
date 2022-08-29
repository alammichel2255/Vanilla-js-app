import { MealContext } from "./MealContext";
import React, { useState, useContext, useEffect } from "react";
import VanillaJS from "./VanillaJS.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { SearchResults } from "./SearchResults";
import { ErrorLanding } from "./ErrorLanding";
import { Dropdown } from "./Dropdown";
import { GlobalStyle } from "./GlobalStyle";


const StyledHeader = styled.header`
  background-color: #ebfbff;
  padding: 40px 0;
  &:hover {
    background-color: white;
    cursor: pointer;
  }
  `
  const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  `
  const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  `
const Button = styled.button`
border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px
font-weight: 700;
padding: 15px 60px;
background-color: white;
color: black;
&:hover {
  opacity: 0.8;
  transform: scale (0.98);
  font-type: bold;
`
const Logo = styled.img``

const Flex = styled.div`
display: flex;
align-items: center;

& > div,
& >ul {
  flex: 1;
}`


export const Header = () => {

  const { mealSearchText, setMealSearchText, mealArray, setMealArray } = useContext(MealContext);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  // fetches per a search for meal name
  useEffect(() => {
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

    <StyledHeader>
      <Container>
        <Nav>
        <Logo src={VanillaJS} alt="VanillaJS" width="100px" onClick={() => navigate('/')} />
        <Button> Recipes </Button>
      
      <Dropdown />
      
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search Meals" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <input type="submit" />
        </form>
        </Nav>
        <Flex>
        <div>
          <h1>Vanilla JS Restaurant</h1>
          <p> We are changing the way you eat! The choice is yours..</p>
            <Button bg='#E8E47D' color='white'>
              Click Here For Random Recipe!
            </Button>
        </div>

          </Flex>
      </Container>
    </StyledHeader>
  )
}


///////HTML DropDown/////////////

// <div class="form-row">
// <form>
//   <h2>Choose a rarity:</h2>
//   <select name="rarity" id="rarity">
//     <option value="common">Common</option>
//     <option value="uncommon">Uncommon</option>
//     <option value="rare">Rare</option>
//     <option value="mythicRare">Mythic Rare</option>
//   </select>
// </form>
// </div>

//////////CSS DropDown /////////////////

// .dropdown {
//   float: left;
//   overflow: hidden;
// }

// .dropdown .dropbtn {
//   font-size: 16px;  
//   border: none;
//   outline: none;
//   color: white;
//   padding: 14px 16px;
//   background-color: inherit;
//   font-family: inherit;
//   margin: 0;
// }
// .dropdown-content a {
//   float: none;
//   color: rgb(255, 255, 255);
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
//   text-align: left;
// }

// .dropdown-content a:hover {
//   background-color: rgb(236, 171, 171);
// }

// .dropdown:hover .dropdown-content {
//   display: block;
// }