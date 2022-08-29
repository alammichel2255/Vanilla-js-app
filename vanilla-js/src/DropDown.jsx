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

export const Dropdown = ({ HeaderMenuItems }) => {
    return (
        <ul className="dropdown">
            {HeaderMenuItems.map((item) => (
                <li>
                    {item.title}
                </li>
            ))}
        </ul>
    );
};import React, { useEffect, useState, useContext } from 'react'
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



export const Dropdown = ({ HeaderMenuItems }) => {
    return (
        <ul className="dropdown">
            {HeaderMenuItems.map((item) => (
                <li>
                    {item.title}
                </li>
            ))}
        </ul>
    );
};

