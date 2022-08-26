import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'


function App() {
  const [mealArray, setMealArray] = useState([])
  const [mealSearchText, setMealSearchText] = useState('')
  const [individualMealDetails, setIndividualMealDetails] = useState({})

  const passContext = { mealArray, setMealArray, mealSearchText, setMealSearchText, individualMealDetails, setIndividualMealDetails };

  ////////////Different search links////////////////


  // https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
  //name: www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

  //first letter: www.themealdb.com/api/json/v1/1/search.php?f=a

  //By id: www.themealdb.com/api/json/v1/1/lookup.php?i=52772

  // Random Meal (single): www.themealdb.com/api/json/v1/1/random.php

  // all meal categories: www.themealdb.com/api/json/v1/1/categories.php

  // List all Categories, Area, Ingredients
  // www.themealdb.com/api/json/v1/1/list.php?c=list
  // www.themealdb.com/api/json/v1/1/list.php?a=list
  // www.themealdb.com/api/json/v1/1/list.php?i=list

  // Filter by main ingredient: www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

  // Filter by Category: www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

  // Filter by Area: www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

  // useEffect(() => {
  //   let url = ''
  //   fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => setData(data))
  // }, [])

  return (
    <MealContext.Provider value={passContext}>

      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<Homepage />} />
          {/* <Route path='/error' element={<ErrorLanding />} />
          <Route path='/details/:id' element={<MealDetails />} />
          <Route path='/searchResults' element={<SearchResults />} /> */}
        </Routes>
      </Router>
      <div className="App">

        Vanilla JS

      </div>

    </MealContext.Provider>

  );
}

export default App;
