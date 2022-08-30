import './index.css';
// import './header.scss';
import { MealContext } from "./MealContext";
import React, { useState, useContext, useEffect } from "react";
import VanillaJS from "./VanillaJS.png";
import VanillaJS2 from "./VanillaJS2.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { SearchResults } from "./SearchResults";
import { ErrorLanding } from "./ErrorLanding";
import { Dropdown } from "./Dropdown";
import { Submenu } from './Submenu';
import { CatDropdown } from "./CatDropdown";
import { AreaDropdown } from './AreaDropdown';


const StyledHeader = styled.header`
  background-color: grey;
  padding: 5px 0;
  padding-bottom: 5px;
  border: 3px solid black;
  height: 150px;
 
  `
  const StyledHeader2 = styled.div`
  background-color: white;
  padding: 10px 0;
  `

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  
  `
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  
  `
const Button = styled.button`
border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px
font-weight: 700;
padding: 15px 60px;
background-color: black;
color: white;
&:hover {
  opacity: 0.8;
  transform: scale (0.98);
  font-type: poppins;
`
const Logo = styled.img`
width: 200px;

`

const Flex = styled.div`
display: flex;
padding-top: 20px;
padding-bottom: 85px;
align-items: center;
text-align: center;
justify-content: space-between;
color: black;
& > div,
& >ul {
  flex: 1;
}`

const Flex2 = styled.div`
display: flex;
padding-top: 20px;
padding-bottom: 40px;
align-items: center;
text-align: center;
justify-content: space-between;
color: black;
& > div,
& >ul {
  flex: 1;
}`


const Image = styled.img`
width: 450px;
margin-left: 40px;
border: 10px solid black;
&:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale (0.98);
`
const SubmenuStyle = styled.div`
border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px
font-weight: 700;
padding: 15px 60px;
background-color: grey;
color: white;
&:hover {
  opacity: 0.8;
  transform: scale (0.98);
  font-type: poppins;
}

`



export const Header = () => {

  const { mealSearchText, setMealSearchText, mealArray, setMealArray, catSubmenuDisplay, setCatSubmenuDisplay } = useContext(MealContext);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const [categorySubMenu, setCategorySubMenu] = useState([]);
  const [areaSubMenu, setAreaSubMenu] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => setCategorySubMenu(data.categories.map(category => category.strCategory)))
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(res => res.json())
      .then(data => setAreaSubMenu(data.meals.map((meal) => meal.strArea)))
  }, [])

  const CategoryMenuItems =
  {
    title: 'Category',
    url: 'c',
    subMenu: categorySubMenu
  }

  const AreaMenuItems =
  {
    title: 'Area',
    url: 'a',
    subMenu: areaSubMenu
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMealSearchText(searchText);
    if (searchText) {
      navigate(`/searchResults/s=${searchText}`);
    }

  }

  const handleCatButtonClick = () => {
    if (catSubmenuDisplay == 'none') {
      setCatSubmenuDisplay('block')
  } else {
      setCatSubmenuDisplay('none')
  }
  }

  return (
<>
  <StyledHeader>
      <Container>
        <Nav>
          <Logo src={VanillaJS} alt="VanillaJS" width="100px" onClick={() => navigate('/')} />
          <h1>Welcome</h1>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Meals" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <input type="submit" />
          </form>




        </Nav>
      </Container>
      </StyledHeader>
      <StyledHeader2>
      <Container>
        <Flex2>
          <div style={{ marginLeft: '-25%' }}>
            <h1>Vanilla JS Restaurant</h1>
            <p> We are changing the way you eat! The choice is yours..</p>

          </div>
          <Image src={VanillaJS2} alt="VanillaJS2" />
        </Flex2>
      </Container>
      </StyledHeader2>
      <Container>
        <Flex>
          <Button onClick={() => navigate(`/searchResults/r=`)}> All Recipes </Button>
          <Button onClick={() => navigate(`/favorites`)}> Favorites </Button>
          {/* <Button onClick={()=> handleCatButtonClick}>Category<CatDropdown/></Button> */}
          
        </Flex>
        <StyledHeader2>
          <StyledHeader2>
            <Container>
                <CatDropdown/>
            </Container>
          </StyledHeader2>
          <StyledHeader2>
            <Container>
                <Button><AreaDropdown /></Button>
            </Container>
          </StyledHeader2>
        
        </StyledHeader2>






        {/* <Dropdown style={{ color: 'white' }} /> */}
      </Container>
    </>
  )
}


  // // fetches per a search for meal name
  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearchText}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       data.meals ? setMealArray(data) : navigate('/error');

  //       console.log('meal search:', data)
  //     })
  // }, [mealSearchText])


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

                  {/* <form onSubmit={handleSubmit}>
	<label for="search">Search</label>
	<input  id="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" pattern=".*\S.*" required />
	<span class="caret"></span>
      </form> */}