import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom'
import styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'
import { RandomMeal } from './RandomMeal';
import { SearchResults } from './SearchResults';
import { MealDetails } from './MealDetails';
import { ErrorLanding } from './ErrorLanding';
import { HeaderMenuItems } from './HeaderMenuItems';
import { Submenu } from './Submenu';

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


export const AreaDropdown = () => {
    const [areaSubMenu, setAreaSubMenu] = useState([]);
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then(res => res.json())
        .then(data => setAreaSubMenu(data.meals.map((meal) => meal.strArea)))
    }, [])
    const AreaMenuItems =
    {
      title: 'Area',
      url: 'a',
      subMenu: areaSubMenu
    }

    function handleClick() {
        if (display == 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    
    //////// Click outside of the dropdown to hide//////////

    // function hadleClick2() {
    //     if (display == 'block') {
    //         setDisplay('none')
    //     }
    // }

    return (
        <div>
            <Button onClick={handleClick}>
                Area
            </Button>
            <SubmenuStyle style={{display:display}}>
                <Submenu sub={AreaMenuItems} />
            </SubmenuStyle>
        </div>
    )

}