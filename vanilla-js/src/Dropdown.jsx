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


const Flex = styled.div`
display: flex;
flex-direction: row;
align-items: center;
text-align: center;
color: black;
& > div,
& >ul {
  flex: 1;
}`


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

export const Dropdown = () => {

    // const [categorySubMenu, setCategorySubMenu] = useState([]);
    // const [areaSubMenu, setAreaSubMenu] = useState([]);

    // useEffect(() => {
    //     fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    //         .then(res => res.json())
    //         .then(data => setCategorySubMenu(data.categories.map(category => category.strCategory)))
    //     fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    //       .then(res => res.json())
    //       .then(data => setAreaSubMenu(data.meals.map((meal) => meal.strArea)))
    // }, [])

    // const headerMenuItems = [
    //     {
    //         title: 'Category',
    //         url: 'c',
    //         subMenu: categorySubMenu
    //     },
    //     {
    //         title: 'Area',
    //         url: 'a',
    //         subMenu: areaSubMenu
    //     }

    // ]

    // console.log(headerMenuItems);
    return (
        <div className="Dropdown">
            {/* {headerMenuItems.map((item) => (
                <Flex>
                    <Button>{item.title}</Button>
                    <Submenu sub={item} />
                  

                </Flex>
            ))} */}
        </div>
    );


};














// import React, { useState } from 'React';

// function Dropdown({ title, items, multiselect = false }) {
//     const [open, setOpen] = useState(flase);
//     const [selection, setSelection] = useState([]);

//     function handleOnClick(item) { }

//     return (
//         <div className="dd-wrapper">
//             <div
//                 tabIndex={0}
//                 className="dd-header"
// //                 role="button"
// //                 onKeyPress={() => toggle(!open)}
// //                 onCLick={() => toggle(!open)}>

//                 <div className="dd-header_title">
//                     <p className="dd-header_title--bold>"{title}</p>
// //             </div>
// //             </div>
// {open && (
//     <ul className="dd-list">
//         {items.map(item => (
//             <li className="dd-list-item" key={item.id}>
//                 <button type="button" onClick={() => handleOnClick(item)}>
//         ))}
//         ()
// )}
// //     );
// // }