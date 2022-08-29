import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom'
import Styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'
import { RandomMeal } from './RandomMeal';
import { SearchResults } from './SearchResults';
import { MealDetails } from './MealDetails';
import { ErrorLanding } from './ErrorLanding';
import { HeaderMenuItems } from './HeaderMenuItems';
import { Submenu } from './Submenu';

export const Dropdown = () => {

    const [categorySubMenu, setCategorySubMenu] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => console.log("categories", data))
    }, [])

    const headerMenuItems = [
        {
            title: 'Category',
            url: '',
            subMenu: ['x', 'x', 'y'

            ]
        },
        {
            title: 'Area',
            url: '',
            subMenu: ['m', 'e', 't'

            ]
        }

    ]

    console.log(headerMenuItems);
    return (
        <ul className="Dropdown">
            {headerMenuItems.map((item) => (
                <div>
                    {item.title}
                    <Submenu sub={item.subMenu} />
                    {/* <ul>
                        {item.subMenu.map((subMenuItem) => (
                            // <li>{subMenuItem}</li>
                            <Submenu/>
                        ))}
                    </ul> */}

                </div>
            ))}
        </ul>
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
//                 role="button"
//                 onKeyPress={() => toggle(!open)}
//                 onCLick={() => toggle(!open)}>

//             </div>
//             </div>
//     );
// }